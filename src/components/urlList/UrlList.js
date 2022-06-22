import React from "react";

import "./UrlList.css";

function UrlList() {
  //   const storageItems = JSON.parse(localStorage.getItem("localUrls"));
  //   console.log("storageItems: ", storageItems);

  //   const handleDelete = (url) => {
  //     const deleted = urls.filter((u) => u.id !== url.id);
  //     setTasks(deleted);
  //   };

  return (
    <div>
      {/* <ul>
        {storageItems.map((item) => (
          <li className="url_item" key={item.id}>
            <a href={item.title}>{item.title}</a>
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
                onClick={() => handleDelete(item.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default UrlList;
