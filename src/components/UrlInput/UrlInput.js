import React, { useState, useEffect } from "react";

function UrlInput() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localUrls")) {
      const storedList = JSON.parse(localStorage.getItem("localUrls"));
      setUrls(storedList);
    }
  }, [setUrls]);

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

  const handleDelete = () => {
    const deleted = urls.filter((u) => u.id !== url.id);
    setUrls(deleted);
    localStorage.setItem("localUrls", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setUrls([]);
    localStorage.removeItem("localUrls");
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
      <div>
        <ul>
          {urls.map((url) => (
            <li className="url_item" key={url.id}>
              <a href={url.title}>{url.title}</a>
              <div className="validation_delete">
                <img
                  className="image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
                  alt="Validated URL"
                  title="Validated"
                />
                <button
                  type="button"
                  id="delete-item_btn"
                  title="Delete Item"
                  onClick={() => handleDelete(url.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {!urls.length ? null : (
        <div>
          <button onClick={() => handleClear()}>Clear All</button>
        </div>
      )}
    </div>
  );
}

export default UrlInput;
