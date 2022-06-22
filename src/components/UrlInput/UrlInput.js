import React, { useState } from "react";

function UrlInput() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const addUrl = (e) => {
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
  return (
    <div>
      <h1>Url Checker</h1>
      <div>
        <input
          name="url"
          type="url"
          placeholder="enter url"
          value={url}
          className="form-control"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addUrl}>Submit</button>
      </div>
    </div>
  );
}

export default UrlInput;
