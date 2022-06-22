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
      <div>
        <ul>
          {urls.map((url) => (
            // <React.Fragment key={url.id}>{url.title}</React.Fragment>
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
                  //   onClick={() => handleDelete(url.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UrlInput;
