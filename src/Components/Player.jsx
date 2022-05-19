import React, { useEffect } from "react";
import "./Stylesheets/player.scss";
import ReactAudioPlayer from "react-audio-player";
import "./cryp"

function Player(props) {
  return (
    <div className="player">
      {/* <h3 id="stock-price">-</h3> */}
      {/* <ReactAudioPlayer src={props.url}  controls /> */}
      <audio src={props.url} controls autoPlay></audio>

      <p>BY <a href="https://ender-yuruk.com/" target="_blank">Ender Yürük</a></p>
    </div>
  );
}
 
export default Player;
