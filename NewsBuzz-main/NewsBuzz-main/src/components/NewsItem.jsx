import React from "react";

export default function NewsItem(props) {
    const { title, description, imageURL, newsUrl, author, date, source } = props;
    return (
      <div className="container mt-2">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span
              className="badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <img
            style={{ height: "200px", objectFit: "cover" }}
            src={
              !imageURL
                ? "https://dims.apnews.com/dims4/default/16be7f6/2147483647/strip/true/crop/1617x910+0+84/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fdf%2F8bf53a9f433764c9e1d96c038e1a%2Fc36a3d39d36a4b4ca75f3e237bf196ab"
                : imageURL
            }
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <div className="card-footer mt-3">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toDateString()}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
}
