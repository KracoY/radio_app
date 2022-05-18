import React, { useEffect } from "react";

import List from "./RadioList";
import RadioList from "../RadioList.json";
import { Col, Row } from "react-bootstrap";

const Body = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list li");
    const product = document.querySelectorAll(".row ");

    list.forEach((i) => {
      i.addEventListener("click", removeclass);
      i.addEventListener("click", filter);
    });
    function removeclass() {
      list.forEach((el) => {
        el.classList.remove("active");
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
    console.log(product);
  },[]);

  function select(){
    document.getElementById("choose")
  }

  return (
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
          <Col >
            <div className="row row-flex">
              {/* <div>
                    <div className={radio.genre}>
                      <div className="card all">
                        <div className="name">{radio.name}</div>
                        <img
                          src={radio.logo}
                          alt="image not found"
                          className="logo"
                        />

                        {console.log(radio.id)}
                      </div>
                    </div>
                  </div> */}
              {RadioList.map((radio, index) => (
                <div
                  className={"col-md-4 col-sm-6 col-xs-12 test " + radio.genre}
                >
                  <div className={"content colour-1 " + radio.genre} id="choose">
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
  );
};

export default Body;
