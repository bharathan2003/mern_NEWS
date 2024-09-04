import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const pageSize = 9;
  const apiKey = '588936967a53441fa6da000251220921'; 

  const changeProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <NavBar />
      <div>
        <LoadingBar
          color='#e60000'
          height={3}
          progress={progress}
          onLoaderFinished={() => changeProgress(0)}
        />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              changeProgress={changeProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              changeProgress={changeProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="us"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              changeProgress={changeProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              changeProgress={changeProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="us"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              changeProgress={changeProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="us"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              changeProgress={changeProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="us"
              category="technology"
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
