import React from "react";
import "./Stylesheets/player.scss";
import ReactAudioPlayer from "react-audio-player";


function Player() {
  return (
    <div className="player">
      <ReactAudioPlayer src="https://listen.radyofenomen.com/fenomen/128/icecast.audio" autoPlay controls />
    </div>
  );
}

export default Player;
