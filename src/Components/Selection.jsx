import React, { useEffect } from "react";
import RadioList from "../RadioList.json";
import "./Stylesheets/body.scss";

const Selection = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list li");
    const product = document.querySelectorAll(".project div");

    list.forEach((i) => {
      i.addEventListener("click", removeclass);
      i.addEventListener("click", filter);
    });
    function removeclass() {
      list.foreach((el) => {
        el.classlist.remove("active");
        this.className = "active";
      });
    }
    function filter() {
      product.forEach((i) => {
        i.style.display = "none";
        document.querySelectorAll(this.dataset.cat).forEach((j) => {
          j.style.display = "block";
        });
      });
    }
  });
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <span></span>
      <ul className="list">
        <li className=" list-pil active" data-cat=".all">
          Alles
        </li>
        <li className="list-pil" data-cat=".two">
          React
        </li>
        <li className="list-pil" data-cat=".three">
          Mobile
        </li>
        <li className="list-pil" data-cat=".four">
          Native
        </li>
        <li className="list-pil" data-cat=".five">
          Branding
        </li>
      </ul>
      <div className="project">
        <div className="two all">fg</div>
        <div className="two all">gerze</div>
        <div className="three all">fvfdd</div>
        <div className="three all">utyrtyjgfs</div>
        <div className="four all">ghrrrs</div>
        <div className="four all">eyqtsggfdfdvr</div>
        <div className="five all">etrq§kèeyj</div>
        <div className="five all">rgrazkeregsbsdulkt dsze</div>
      </div>
    </div>
  );
};

export default Selection;
