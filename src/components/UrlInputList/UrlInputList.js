import React, { useState, useEffect } from "react";

import "./UrlInputList.css";

function UrlInputList({ handleDelete, handleClear, urls }) {
  return (
    <React.Fragment>
      <section>
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
                    onClick={() => handleDelete(url)}
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
      </section>
    </React.Fragment>
  );
}

export default UrlInputList;
