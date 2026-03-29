import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl ? imageUrl : "https://static.vecteezy.com/system/resources/previews/010/586/354/non_2x/breaking-news-background-business-or-technology-template-breaking-news-text-on-dark-blue-with-earth-and-world-map-background-tv-news-show-broadcast-design-vector.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
  }
}
