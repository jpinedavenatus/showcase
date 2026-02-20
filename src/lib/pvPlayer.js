export class pvPlayer {
  #placementName
  #onFlowComplete
  #onVideoFinished
  #container
  #playerMainContainer
  playerContainer

  constructor(props) {
    this.#playerMainContainer = document.getElementById(props.container)
    this.#playerMainContainer.style.display = 'none'
    this.#container = 'player'
    this.#placementName = props.placementName
    this.#onFlowComplete = props.onFlowComplete
    this.#onVideoFinished = props.onVideoFinished

    console.log('this.#playerMainContainer', this.#playerMainContainer)
    if (this.#playerMainContainer) {
      //set the width and height to 1px
      this.playerContainer = this.#createDivElement(this.#playerMainContainer)
    }
  }

  #createDivElement(parentDiv) {
    const playerDiv = document.createElement('div')
    playerDiv.id = this.#container
    parentDiv.appendChild(playerDiv)

    return playerDiv
  }

  playVideo() {
    let adLoadTimeout, failsafeTimeout
    let videoIsPlaying = false
    const noAdsReturnTimer = 5000
    const failSafeTimer = 35000

    const videoPlacementName = this.#placementName
    const playerMainContainer = this.#playerMainContainer

    const flowCompleteCallback =
      this.#onFlowComplete && typeof this.#onFlowComplete === 'function'
        ? this.#onFlowComplete
        : null
    const videoFinishedCallback =
      this.#onVideoFinished && typeof this.#onVideoFinished === 'function'
        ? this.#onVideoFinished
        : null

    playerMainContainer.style.display = 'block'

    console.log('[VIDEO] initialize Custom Video')

    // Set a timeout to handle the scenario where no ad is returned in 10 seconds.
    adLoadTimeout = setTimeout(handleNoAdReturned, noAdsReturnTimer) // 10 seconds timeout

    function handleNoAdReturned() {
      console.log('[VIDEO] NO ADS RETURNED')
      closeVideoPlayer() //removes video player when theres no video loaded after 10s
      proceedToContent(flowCompleteCallback)
      // Here you can also add any other cleanup or error handling code if required.
    }

    function handleFailSafeTimer() {
      console.log(
        '[VIDEO] FAIL SAFE TIMER TRIGGERED, VIDEO DIDNT PLAY, CLOSING THE PLAYER.',
      )
      closeVideoPlayer()
      proceedToContent(flowCompleteCallback)
      // Here you can also add any other cleanup or error handling code if required.
    }

    const proceedToContent = (callback) => {
      console.log('[VIDEO] Proceed To content: videoIsPlaying=', videoIsPlaying)
      if (!videoIsPlaying) {
        callback && callback()
      }
    }

    const showVideoContainer = () => {
      if (this.playerContainer) {
        this.playerContainer.style.opacity = 'unset'
        this.playerContainer.style.height = 'unset'
        this.playerContainer.style.width = '100%'
      }
    }

    const hideVideoContainer = () => {
      videoIsPlaying = false
      if (this.playerContainer) {
        //set the width and height to 1px
        this.playerContainer.style.height = '1px'
        this.playerContainer.style.width = '1px'
        this.playerContainer.style.opacity = 0
      }
    }

    function closeVideoPlayer() {
      hideVideoContainer()
      playerMainContainer.style.display = 'none'
      //document.getElementById("player-container").classList.add("hidden"); //remove main container.
      clearTimeout(adLoadTimeout)
      clearTimeout(failsafeTimeout)
      console.log('[VIDEO] closeVideoPlayer.')

      self.__VM = self.__VM || []
      self.__VM.push(function (admanager, scope) {
        admanager.placements.forEach((placement) => {
          if (placement.anyName == videoPlacementName) {
            admanager.removePlacement(placement) // video removed
          }
        })
      })
    }
    const openVideoPlayer = () => {
      this.playerContainer && (this.playerContainer.style.display = 'block')

      showVideoContainer()
    }

    const handleVideoStarted = () => {
      console.log('[VIDEO] Video Started.')
      videoIsPlaying = true
      clearTimeout(adLoadTimeout)
      openVideoPlayer()
      failsafeTimeout = setTimeout(handleFailSafeTimer, failSafeTimer)
    }

    const handleRendered = () => {
      console.log('[VIDEO] RENDERED')
    }

    const handleSlotVideoAllAdsComplete = () => {
      console.log('[VIDEO] SLOT_VIDEO_ALL_ADS_COMPLETE')
      closeVideoPlayer()
      proceedToContent(videoFinishedCallback)
      proceedToContent(flowCompleteCallback)
    }

    const handleVideoAdSkipped = () => {
      console.log('[VIDEO] Video ad skipped')
      closeVideoPlayer()
      proceedToContent(flowCompleteCallback)
    }

    self.__VM = self.__VM || []
    self.__VM.push((admanager, scope) => {
      const PLACEMENT_EVENTS = scope.Placement.PLACEMENT_EVENTS
      scope.Config.get(videoPlacementName)
        .activate(this.#container)
        .videoApi((videoApi) => {
          console.log('[VIDEO] played video')
          hideVideoContainer()

          const videoPlacement = videoApi.placement()

          //on events
          videoPlacement.off(PLACEMENT_EVENTS.RENDERED, handleRendered)
          videoPlacement.off(
            PLACEMENT_EVENTS.SLOT_VIDEO_AD_STARTED,
            handleVideoStarted,
          )
          videoPlacement.off(
            PLACEMENT_EVENTS.SLOT_VIDEO_ALL_ADS_COMPLETE,
            handleSlotVideoAllAdsComplete,
          )
          videoPlacement.off(
            PLACEMENT_EVENTS.SLOT_VIDEO_AD_SKIPPED,
            handleVideoAdSkipped,
          )
          videoPlacement.off(
            PLACEMENT_EVENTS.SLOT_VIDEO_AD_ERROR,
            handleNoAdReturned,
          )

          //off events
          videoPlacement.on(PLACEMENT_EVENTS.RENDERED, handleRendered)
          videoPlacement.on(
            PLACEMENT_EVENTS.SLOT_VIDEO_AD_STARTED,
            handleVideoStarted,
          )
          videoPlacement.on(
            PLACEMENT_EVENTS.SLOT_VIDEO_ALL_ADS_COMPLETE,
            handleSlotVideoAllAdsComplete,
          )
          videoPlacement.on(
            PLACEMENT_EVENTS.SLOT_VIDEO_AD_SKIPPED,
            handleVideoAdSkipped,
          )
          videoPlacement.on(
            PLACEMENT_EVENTS.SLOT_VIDEO_AD_ERROR,
            handleNoAdReturned,
          )
        })
    })
  }
}
