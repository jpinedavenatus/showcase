export class pvPlayer {
  //template script v4
  #placementName;
  #onFlowComplete;
  #onVideoFinished;
  #container;
  #playerMainContainer;
  #preloader;
  playerContainer;

  constructor(props) {
    this.#playerMainContainer = document.getElementById(props.container);
    this.#playerMainContainer.style.display = 'none';
    this.#container = 'player';
    this.#placementName = props.placementName;
    this.#onFlowComplete = props.onFlowComplete;
    this.#onVideoFinished = props.onVideoFinished;

    if (this.#playerMainContainer) {
      //set the width and height to 1px
      this.playerContainer = this.#createDivElement(this.#playerMainContainer);
      this.#preloader = this.#createPreloader(this.#playerMainContainer);
    }
  }

  #createDivElement(parentDiv) {
    const playerDiv = document.createElement('div');
    playerDiv.id = this.#container;
    parentDiv.appendChild(playerDiv);

    return playerDiv;
  }

  #createPreloader(parentDiv) {
    const preloaderDiv = document.createElement('div');
    preloaderDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE --><g><circle cx="12" cy="3" r="1" fill="currentColor"><animate id="SVGelgoqhuA" attributeName="r" begin="0;SVGSRzJybSJ.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="4.21" r="1" fill="currentColor"><animate id="SVGBcQu6cCi" attributeName="r" begin="SVGelgoqhuA.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="4.21" r="1" fill="currentColor"><animate id="SVGSRzJybSJ" attributeName="r" begin="SVGeZGzNdVZ.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="7.5" r="1" fill="currentColor"><animate id="SVGG5Q0fe0M" attributeName="r" begin="SVGBcQu6cCi.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="7.5" r="1" fill="currentColor"><animate id="SVGeZGzNdVZ" attributeName="r" begin="SVGUTnihcal.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="21" cy="12" r="1" fill="currentColor"><animate id="SVG8aQG8dpc" attributeName="r" begin="SVGG5Q0fe0M.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="3" cy="12" r="1" fill="currentColor"><animate id="SVGUTnihcal" attributeName="r" begin="SVGHktsvT5Q.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="16.5" r="1" fill="currentColor"><animate id="SVGqCF3Scrd" attributeName="r" begin="SVG8aQG8dpc.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="16.5" r="1" fill="currentColor"><animate id="SVGHktsvT5Q" attributeName="r" begin="SVGSFNCBbxb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="19.79" r="1" fill="currentColor"><animate id="SVGMFYo1cJN" attributeName="r" begin="SVGqCF3Scrd.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="19.79" r="1" fill="currentColor"><animate id="SVGSFNCBbxb" attributeName="r" begin="SVGLSoLpdOI.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="12" cy="21" r="1" fill="currentColor"><animate id="SVGLSoLpdOI" attributeName="r" begin="SVGMFYo1cJN.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"/></g></svg>`;

    preloaderDiv.style.position = 'fixed';
    preloaderDiv.style.top = '50%';
    preloaderDiv.style.left = '50%';
    preloaderDiv.style.transform = 'translate(-50%, -50%)';
    parentDiv.appendChild(preloaderDiv);
    return preloaderDiv;
  }

  #tooglePreloader(props) {
    console.log('tooglePreloader >>  ', props);
    this.#preloader.style.display = props ? 'unset' : 'none';
  }

  playVideo() {
    let adLoadTimeout, failsafeTimeout;
    let videoIsPlaying = false;
    const noAdsReturnTimer = 5000;
    const failSafeTimer = 35000;

    const videoPlacementName = this.#placementName;
    const playerMainContainer = this.#playerMainContainer;

    const flowCompleteCallback =
      this.#onFlowComplete && typeof this.#onFlowComplete === 'function' ? this.#onFlowComplete : null;

    const videoFinishedCallback =
      this.#onVideoFinished && typeof this.#onVideoFinished === 'function' ? this.#onVideoFinished : null;

    playerMainContainer.style.display = 'block';
    this.#tooglePreloader(true);
    console.log('[VIDEO] initialize Custom Video');

    // Set a timeout to handle the scenario where no ad is returned in 10 seconds.
    adLoadTimeout = setTimeout(handleNoAdReturned, noAdsReturnTimer); // 10 seconds timeout

    function handleNoAdReturned() {
      console.log('[VIDEO] NO ADS RETURNED');
      closeVideoPlayer(); //removes video player when theres no video loaded after 10s
      proceedToContent(flowCompleteCallback);
      // Here you can also add any other cleanup or error handling code if required.
    }

    function handleFailSafeTimer() {
      console.log('[VIDEO] FAIL SAFE TIMER TRIGGERED, VIDEO DIDNT PLAY, CLOSING THE PLAYER.');
      closeVideoPlayer();
      proceedToContent(flowCompleteCallback);
      // Here you can also add any other cleanup or error handling code if required.
    }

    const proceedToContent = (callback) => {
      console.log('[VIDEO] Proceed To content: videoIsPlaying', videoIsPlaying, callback);
      if (!videoIsPlaying) {
        callback && callback();
      }
    };

    const showVideoContainer = () => {
      if (this.playerContainer) {
        this.playerContainer.style.opacity = 'unset';
        this.playerContainer.style.height = 'unset';
        this.playerContainer.style.width = '100%';
      }
    };

    const hideVideoContainer = () => {
      videoIsPlaying = false;
      if (this.playerContainer) {
        //set the width and height to 1px
        this.playerContainer.style.height = '1px';
        this.playerContainer.style.width = '1px';
        this.playerContainer.style.opacity = 0;
      }
    };

    const closeVideoPlayer = () => {
      hideVideoContainer();
      playerMainContainer.style.display = 'none';
      //document.getElementById("player-container").classList.add("hidden"); //remove main container.
      clearTimeout(adLoadTimeout);
      clearTimeout(failsafeTimeout);
      console.log('[VIDEO] closeVideoPlayer.');

      self.__VM = self.__VM || [];
      self.__VM.push(function (admanager, scope) {
        admanager.placements.forEach((placement) => {
          if (placement.anyName == videoPlacementName) {
            admanager.removePlacement(placement); // video removed
          }
        });
      });
    };
    const openVideoPlayer = () => {
      this.playerContainer && (this.playerContainer.style.display = 'block');

      showVideoContainer();
    };

    const handleVideoStarted = () => {
      this.#tooglePreloader(false);
      console.log('[VIDEO] Video Started.');
      videoIsPlaying = true;
      clearTimeout(adLoadTimeout);
      openVideoPlayer();
      failsafeTimeout = setTimeout(handleFailSafeTimer, failSafeTimer);
    };

    const handleRendered = () => {
      console.log('[VIDEO] RENDERED');
    };

    const handleSlotVideoAllAdsComplete = () => {
      console.log('[VIDEO] SLOT_VIDEO_ALL_ADS_COMPLETE');
      closeVideoPlayer();
      proceedToContent(videoFinishedCallback);
      proceedToContent(flowCompleteCallback);
    };

    const handleVideoAdSkipped = () => {
      console.log('[VIDEO] Video ad skipped');
      closeVideoPlayer();
      proceedToContent(flowCompleteCallback);
    };

    self.__VM = self.__VM || [];
    self.__VM.push((admanager, scope) => {
      const PLACEMENT_EVENTS = scope.Placement.PLACEMENT_EVENTS;
      scope.Config.get(videoPlacementName)
        .activate(this.#container)
        .videoApi((videoApi) => {
          console.log('[VIDEO] played video');
          hideVideoContainer();

          const videoPlacement = videoApi.placement();

          //on events
          videoPlacement.off(PLACEMENT_EVENTS.RENDERED, handleRendered);
          videoPlacement.off(PLACEMENT_EVENTS.SLOT_VIDEO_AD_STARTED, handleVideoStarted);
          videoPlacement.off(PLACEMENT_EVENTS.SLOT_VIDEO_ALL_ADS_COMPLETE, handleSlotVideoAllAdsComplete);
          videoPlacement.off(PLACEMENT_EVENTS.SLOT_VIDEO_AD_SKIPPED, handleVideoAdSkipped);
          videoPlacement.off(PLACEMENT_EVENTS.SLOT_VIDEO_AD_ERROR, handleNoAdReturned);

          //off events
          videoPlacement.on(PLACEMENT_EVENTS.RENDERED, handleRendered);
          videoPlacement.on(PLACEMENT_EVENTS.SLOT_VIDEO_AD_STARTED, handleVideoStarted);
          videoPlacement.on(PLACEMENT_EVENTS.SLOT_VIDEO_ALL_ADS_COMPLETE, handleSlotVideoAllAdsComplete);
          videoPlacement.on(PLACEMENT_EVENTS.SLOT_VIDEO_AD_SKIPPED, handleVideoAdSkipped);
          videoPlacement.on(PLACEMENT_EVENTS.SLOT_VIDEO_AD_ERROR, handleNoAdReturned);
        });
    });
  }
}
