import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Details.css";
export default function UsersData() {
  const [Users, fetchUsers] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = Users.length;
  const { uuid } = useParams();
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  const getImages = () => {
    fetch(
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };

  const x = Object.keys(Users)[7];
  useEffect(() => {
    getImages();
  }, []);
  console.log(length);
  return (
    <div className="main-page">
      <Link to="/">
        <h2>Back To Gallery</h2>
      </Link>
      {Users.filter((card) => card.uuid === uuid).map((item, i) => (
        <div className="img-section" key={i}>
          <h3 className="img-number">
            image <span>{current + 1}</span> /30
          </h3>
          <span className={current === 0 ? "name-of-img" : "hide"}>
            <span>Name of Image:</span> {item.name}
          </span>
          <div>
            {Users.map((item, index) => (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                <span className={current === 0 ? "hide" : "name-of-img"}>
                  <span>Name of Image:</span> {item.name}
                </span>
                {index === current && <img src={item.url} alt="travel image" />}
              </div>
            ))}
          </div>
          <img
            src={item.url}
            alt=" image"
            className={current === 0 ? "img-of-slide" : "hide"}
          />

          <span className="move-icons-left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faSquareCaretLeft} className="image-icon" />
          </span>
          <span className="move-icons-right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faSquareCaretRight} className="image-icon" />
          </span>
        </div>
      ))}
    </div>
  );
  console.log(item.name);
}
{
  /* <div
className=
>

</div> */
}
