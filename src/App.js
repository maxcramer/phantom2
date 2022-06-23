import React, { useState, useEffect } from "react";

import "./App.css";
import UrlInput from "./components/UrlInputList/UrlInputList";

function App() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    console.log("running");
    if (localStorage.getItem("localUrls")) {
      const storedList = JSON.parse(localStorage.getItem("localUrls"));
      setUrls(storedList);
    }
  }, [setUrls]);

  const onSubmit = (e) => {
    console.log("Running onSubmit");
    if (url) {
      const newUrl = {
        id: new Date().getTime().toString(),
        title: url,
      };
      setUrls([...urls, newUrl]);
      localStorage.setItem("localUrls", JSON.stringify([...urls, newUrl]));
      setUrl("");
    }
  };

  const handleDelete = (url) => {
    const deleted = urls.filter((u) => u.id !== url.id);
    console.log("deleted: ", deleted);
    setUrls(deleted);
    localStorage.setItem("localUrls", JSON.stringify(deleted));
    console.log("running");
  };

  const handleClear = () => {
    setUrls([]);
    localStorage.removeItem("localUrls");
  };
  console.log("last line before return statement urls: ", urls);
  return (
    <div className="App">
      {/* <UrlInput  /> */}
      <UrlInput
        handleDelete={handleDelete}
        onSubmit={onSubmit}
        handleClear={handleClear}
        url={url}
        setUrl={setUrl}
        urls={urls}
      />
    </div>
  );
}

export default App;
