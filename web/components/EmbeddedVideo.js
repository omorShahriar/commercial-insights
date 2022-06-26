import YouTube from "react-youtube";

const EmbeddedVideo = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <YouTube
      className=""
      videoId={videoId}
      opts={opts}
      onReady={(e) => e.target.pauseVideo()}
    />
  );
};

export default EmbeddedVideo;
