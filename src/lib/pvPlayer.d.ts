export interface PvPlayerProps {
  container: string
  placementName: string
  onFlowComplete?: () => void
  onVideoFinished?: () => void
}

export class pvPlayer {
  constructor(props: PvPlayerProps)
  playVideo = () => {}
}