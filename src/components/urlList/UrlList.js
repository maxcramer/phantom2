import React from "react";

function UrlList() {
  const storageItems = JSON.parse(localStorage.getItem("localUrls"));
  console.log("storageItems: ", storageItems);
  return (
    <div>
      <ul>
        {storageItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;
