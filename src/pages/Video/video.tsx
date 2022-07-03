import { useParams } from 'react-router-dom'
import YouTube from "react-youtube";

export default function Video() {
  const { videoId } = useParams()
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} />
}
