import React, { useEffect, useState } from "react";

import List from "./RadioList";
import RadioList from "../RadioList.json";
import { Col, Row } from "react-bootstrap";
import Player from "./Player";

const Body = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list li");
    const product = document.querySelectorAll(".row ");
    list.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(item);
      });
    });
    // list.forEach((i) => {
    //   i.addEventListener("click", removeclass);
    //   i.addEventListener("click", filter);
    // });
    // function removeclass() {
    //   list.forEach((el) => {
    //     el.classList.remove("active");
    //     this.className = "active";
    //   });
    // }
    // function filter() {
    //   product.forEach((i) => {
    //     i.style.display = "none";
    //     document.querySelectorAll(this.dataset.cat).forEach((j) => {
    //       j.style.display = "block";
    //     });
    //   });
    // }
    // console.log(product);
  });

  const [url, setUrl] = useState(
    "https://listen.radyofenomen.com/fenomen/128/icecast.audio"
  );
  return (
    <>
      <div className="body">
        <ul className="list">
          <li data-cat=".all" className="active">
            Alle genres
          </li>
          <li className="" data-cat=".nationaal">
            Nationaal
          </li>
          <li className="" data-cat=".klassiek">
            Klassiek
          </li>
          <li className="" data-cat=".pop">
            POP
          </li>
          <li className="" data-cat=".turk">
            Turkish
          </li>
          <li className="" data-cat=".rock">
            Rock
          </li>
          <li className="" data-cat=".regionaal">
            Regionaal
          </li>
          <li className="" data-cat=".top40">
            TOP 40
          </li>
          <li className="" data-cat=".kids">
            Kids
          </li>
        </ul>
        <div className="main">
          <Row>
            <Col>
              <div className="row row-flex">
                {RadioList.map((radio, index) => (
                  <div
                    className={
                      "col-md-4 col-sm-6 col-xs-12 test "
                    }
                    key={index}
                    onClick={() => {
                      setUrl(radio.url);
                    }}
                  >
                    <div
                      className={"content colour-1 " }
                      id="choose"
                    >
                      <h3>{radio.name}</h3>
                      <img
                        src={radio.logo}
                        alt="image not found"
                        className="logo"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col md={3}>
              <div className="weather bg-dark">
                <p>edsrtye</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Player url={url} />
    </>
  );
};

export default Body;
