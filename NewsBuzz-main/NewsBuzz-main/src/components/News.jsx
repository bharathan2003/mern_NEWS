import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import ErrorBoundary from "./ErrorBoundary";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const captialize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
    props.changeProgress(40);
    let data = await fetch(url);
    props.changeProgress(70);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.changeProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `${captialize(props.category)} - NewsBuzz`;
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    if (!(page > Math.ceil(totalResults / props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles((prevArticles) =>
        prevArticles.concat(parsedData.articles)
      );
    }
  };

  const fetchMoreData = () => {
    fetchData();
  };

  const refresh = () => {
    setArticles([]);
    setLoading(true);
    setPage(1);
    setTotalResults(0);
    updateNews();
  };

  return (
    <div>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container">
            <h3 className="display-5 my-5 text-center">
              NewsBuzz - Top{" "}
              {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
              Headlines
            </h3>
            {articles && articles.length > 0 ? (
              <>
                <InfiniteScroll
                  dataLength={articles.length}
                  next={() => fetchMoreData()}
                  hasMore={articles.length < totalResults}
                  loader={
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "10vh" }}
                    >
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  }
                  endMessage={
                    <p className="text-center">
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  refreshFunction={refresh}
                  pullDownToRefresh
                  pullDownToRefreshThreshold={50}
                  pullDownToRefreshContent={
                    <h3 className="text-center">
                      &#8595; Pull down to refresh
                    </h3>
                  }
                  releaseToRefreshContent={
                    <h3 className="text-center">&#8593; Release to refresh</h3>
                  }
                >
                  <div className="container">
                    <div className="row">
                      {articles.map((element) => (
                        !element.title.includes("removed") && (
                          <div className="col-md-4 mb-3" key={element.url}>
                            <NewsItem
                              title={
                                element.title ? element.title.slice(0, 26) : ""
                              }
                              description={
                                element.description
                                  ? element.description.slice(0, 67)
                                  : ""
                              }
                              imageURL={element.urlToImage}
                              newsUrl={element.url}
                              author={element.author}
                              date={element.publishedAt}
                              source={element.source ? element.source.name : ""}
                            />
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </InfiniteScroll>
              </>
            ) : (
              <p className="text-center">Headlines Not Available</p>
            )}
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};