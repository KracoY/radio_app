import React, { useEffect } from "react";
import "./Stylesheets/player.scss";
//import ReactAudioPlayer from "react-audio-player";

function Player(props) {
  return (
    <div className="player">
      {/* <ReactAudioPlayer src={props.url}  controls /> */}
      <audio src={props.url} controls autoPlay></audio>
    </div>
  );
}

export default Player;
