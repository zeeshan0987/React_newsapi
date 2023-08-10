import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="a"
                category="general"
              />
            }
          />
          <Route
            path="business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="b"
                category="business"
              />
            }
          />
          <Route
            path="entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="c"
                category="entertainment"
              />
            }
          />
          <Route
            path="general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="e"
                category="general"
              />
            }
          />
          <Route
            path="health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="f"
                category="health"
              />
            }
          />
          <Route
            path="science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="g"
                category="science"
              />
            }
          />
          <Route
            path="sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="h"
                category="sports"
              />
            }
          />
          <Route
            path="technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="i"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
