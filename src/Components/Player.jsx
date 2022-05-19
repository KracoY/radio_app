import React, { useEffect } from "react";
import "./Stylesheets/player.scss";
import ReactAudioPlayer from "react-audio-player";

function Player(props) {
  return (
    <div className="player">
      {/* <ReactAudioPlayer src={props.url}  controls /> */}
      <audio src={props.url} controls autoPlay></audio>

      <p>BY <a href="https://ender-yuruk.com/" target="_blank">Ender Yürük</a></p>
    </div>
  );
}

export default Player;
