import { FC, useEffect, useState, useRef, useCallback } from 'react';
import { TextFiller } from '../components/DisplayUtils';
import { IPageProps } from '../types';
import Sidebar from '../components/Sidebar';

// --- Constants ---
const SCALE = 20;
const SPEED = 150;

interface Point {
  x: number;
  y: number;
}

const RewardVideo: FC<IPageProps> = ({ setPage, currentPage, pageHeader }) => {
  // Game Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameInterval = useRef<number | null>(null);
  const snakePos = useRef<Point>({ x: 40, y: 40 });
  const tail = useRef<Point[]>([]);
  const totalTail = useRef<number>(0);
  const direction = useRef<Point>({ x: SCALE, y: 0 });
  const food = useRef<Point>({ x: 100, y: 100 });
  const isPaused = useRef<boolean>(true);

  // React State
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isAdReady, setIsAdReady] = useState(false);

  // --- Reward Video Logic ---
  const pushToAdManager = useCallback((action: any) => {
    (window as any).__VM = (window as any).__VM || [];
    (window as any).__VM.push(action);
  }, []);

  const handleRewardEarned = useCallback(() => {
    setGameOver(false);
    continueGame();
    reloadReward();
  }, []);

  useEffect(() => {
    pushToAdManager((admanager: any, scope: any) => {
      if (admanager) {
        //dummy
      }
      const gptReward = scope.Config.get('gpt_reward');
      gptReward.display({ body: true }).setKnown('gptReward');
      scope.Config.getKnown('gptReward').rewardedApi((api: any) => {
        api.on('ready', () => {
          console.log('[REWARD VIDEO] Status: Ready');
          setIsAdReady(true);
        });
        api.on('rewarded', () => {
          console.log('[REWARD VIDEO] Status: rewarded');
          setIsAdReady(false);
          api.clear();
          handleRewardEarned();
        });
        api.on('closed', () => {
          console.log('[REWARD VIDEO] Status: closed');
          setIsAdReady(false);
          api.clear();
        });
      });
    });
  }, [pushToAdManager, handleRewardEarned]);

  const playRewardAd = () => {
    pushToAdManager((admanager: any, scope: any) => {
      if (admanager) {
        /* dummy */
      }
      console.log('[REWARD VIDEO] Status: Play');
      scope.Config.getKnown('gptReward').rewardedApi((api: any) => api.show());
    });
  };

  const reloadReward = () => {
    pushToAdManager((admanager: any, scope: any) => {
      if (admanager) {
        /* dummy */
      }
      console.log('[REWARD VIDEO] Status: Reload');
      scope.Config.getKnown('gptReward').reload();
    });
  };

  // --- Game Engine ---
  const drawRoundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
    ctx.beginPath();
    ctx.roundRect(x, y, SCALE, SCALE, r);
    ctx.fill();
  };

  const playGame = () => {
    isPaused.current = false;
    setInitialLoad(false);
  };
  const resetGame = () => {
    reloadReward();
    snakePos.current = { x: 40, y: 40 };
    direction.current = { x: SCALE, y: 0 };
    tail.current = [];
    totalTail.current = 0;
    setScore(0);
    setGameOver(false);
    isPaused.current = false;
  };
  const continueGame = () => {
    snakePos.current = { x: 40, y: 40 };
    direction.current = { x: SCALE, y: 0 };
    setGameOver(false);
    isPaused.current = false;
  };
  const update = useCallback(() => {
    if (isPaused.current || gameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Movement logic
    for (let i = 0; i < tail.current.length - 1; i++) {
      tail.current[i] = tail.current[i + 1];
    }
    if (totalTail.current >= 1) tail.current[totalTail.current - 1] = { ...snakePos.current };

    snakePos.current.x += direction.current.x;
    snakePos.current.y += direction.current.y;

    // Collisions
    if (
      snakePos.current.x < 0 ||
      snakePos.current.x >= canvas.width ||
      snakePos.current.y < 0 ||
      snakePos.current.y >= canvas.height ||
      tail.current.some((t) => t.x === snakePos.current.x && t.y === snakePos.current.y)
    ) {
      if (lives > 0) {
        setLives((l) => l - 1);
        snakePos.current = { x: 0, y: 0 }; // Simple reset
      } else {
        setGameOver(true);
        isPaused.current = true;
      }
    }

    // Eat
    if (snakePos.current.x === food.current.x && snakePos.current.y === food.current.y) {
      totalTail.current++;
      setScore((s) => s + 1);
      food.current = {
        x: Math.floor(Math.random() * (canvas.width / SCALE)) * SCALE,
        y: Math.floor(Math.random() * (canvas.height / SCALE)) * SCALE,
      };
    }

    // Draw
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#14532d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#88304E';
      drawRoundedRect(ctx, food.current.x, food.current.y, 10);
      ctx.fillStyle = '#8D643A';
      tail.current.forEach((t) => drawRoundedRect(ctx, t.x, t.y, 5));
      drawRoundedRect(ctx, snakePos.current.x, snakePos.current.y, 5);
    }
  }, [gameOver, lives]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
      switch (e.key) {
        case 'ArrowUp':
          if (direction.current.y === 0) direction.current = { x: 0, y: -SCALE };
          break;
        case 'ArrowDown':
          if (direction.current.y === 0) direction.current = { x: 0, y: SCALE };
          break;
        case 'ArrowLeft':
          if (direction.current.x === 0) direction.current = { x: -SCALE, y: 0 };
          break;
        case 'ArrowRight':
          if (direction.current.x === 0) direction.current = { x: SCALE, y: 0 };
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    gameInterval.current = window.setInterval(update, SPEED);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (gameInterval.current) clearInterval(gameInterval.current);
    };
  }, [update]);

  return (
    <>
      <Sidebar currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} /> 
      <div id="content-container" className="flex justify-center p-4 mt-5">
        <div className="w-full max-w-6xl sm:w-sm md:m-h-[250]">
          <div className="flex flex-col md:flex-row gap-5">
            <main
              id="article-body"
              className="w-full p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm"
            >


              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-2xl"><span className='text-venatusred font-bold'>Reward</span> Video</h1>
                <div className="flex gap-4 font-mono font-bold bg-white px-3 py-1 rounded border">
                  <span className="text-green-700">SCORE: {score}</span>
                  {/* <span className="text-red-600">LIVES: {lives}</span> */}
                </div>
              </div>
              <TextFiller lines={2} />
              <div
                id="game-wrapper"
                className=" border-dashed border-gray-700 border-2 relative w-full md:w-3/4 h-[500px] mx-auto bg-gray-100 overflow-hidden shadow-inner rounded-md"
              >
                <canvas ref={canvasRef} width={680} height={500} className="rounded-md p-2 w-full h-full block" />
                {initialLoad && (
                  <div className="absolute inset-0 bg-green-900 flex flex-col items-center justify-center text-white p-6 m-2 text-center z-10">
                    <h2 className="text-3xl font-bold mb-2">Classic Snake Game</h2>
                    <div className="flex flex-col gap-3 w-64">
                      <button
                        onClick={playGame}
                        className="bg-venatusred hover:bg-gray-100 border-2 border-venatusred hover:border-venatusred hover:text-venatusred py-2 px-4 rounded font-bold"
                      >
                        Play Now
                      </button>
                    </div>
                  </div>
                )}

                {/* Game Over Overlay */}
                {gameOver && (
                  <div className="absolute inset-0 bg-green-900 flex flex-col items-center justify-center text-white m-2 text-center z-10">
                    <h2 className="text-3xl font-bold mb-2">GAME OVER</h2>
                    <p className="mb-6">Final Score: {score}</p>
                    <div className="flex flex-col gap-3 w-64">
                      <button
                        onClick={playRewardAd}
                        disabled={!isAdReady}
                        className={`py-2 px-4 rounded font-bold transition ${isAdReady ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-600 cursor-not-allowed'}`}
                      >
                        {isAdReady ? '📺 Watch Ad to Continue' : 'Loading Ad...'}
                      </button>
                      <button onClick={resetGame} className="border-2 hover:text-blue-600 border-blue-600 bg-blue-600 hover:bg-gray-100 py-2 px-4 rounded font-bold">
                        Play Again?
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <TextFiller lines={4} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardVideo;
