import React, { useState, useEffect } from "react";

import "./App.css";
import UrlList from "./components/UrlList/UrlList";
import UrlInput from "./components/UrlInput/UrlInput";
import Pagination from "./components/Pagination/Pagination";

function App() {
  // Setting up Urls array
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  // Setting up for Pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [urlsPerPage, setUrlsPerPage] = useState(20);

  // Check for items in local storage
  useEffect(() => {
    if (localStorage.getItem("localUrls")) {
      setLoading(true);
      const storedList = JSON.parse(localStorage.getItem("localUrls"));
      setUrls(storedList);
      setLoading(false);
    }
  }, [setUrls]);

  // Submit input value
  const onSubmit = (e) => {
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

  // Delete a single Url
  const handleDelete = (url) => {
    const deleted = urls.filter((u) => u.id !== url.id);
    setUrls(deleted);
    localStorage.setItem("localUrls", JSON.stringify(deleted));
  };

  // Clear all Urls
  const handleClear = () => {
    setUrls([]);
    localStorage.removeItem("localUrls");
  };

  // Work out current number of Urls per page for pagination
  const indexOfLastUrl = currentPage * urlsPerPage;
  const indexOfFirstUrl = indexOfLastUrl - urlsPerPage;
  const currentUrls = urls.slice(indexOfFirstUrl, indexOfLastUrl);

  // set Pagination numbers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <UrlInput onSubmit={onSubmit} url={url} setUrl={setUrl} />
      <UrlList
        handleDelete={handleDelete}
        handleClear={handleClear}
        urls={currentUrls}
        loading={loading}
      />
      <Pagination
        urlsPerPage={urlsPerPage}
        totalUrls={urls.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
