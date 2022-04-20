import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import "./GalleryPage.css";
class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time </h1>{" "}
        </div>
      );

    return (
      <div className="gallery-page">
        {this.state.items ? <div></div> : null}
        <h2>Gallery Page</h2>
        <div></div>
        <div className="img-container">
          {items.map((item) => (
            <div className="the-img" key={item.uuid}>
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlassPlus}
                  className="icon"
                />
              </span>
              <Link to={"/" + item.uuid}>
                <img src={item.url} className="img-of-gallery" alt="img" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GalleryPage;
