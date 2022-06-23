import React from "react";

import "./Pagination.css";

const Pagination = ({ urlsPerPage, totalUrls }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUrls / urlsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("Pagination running", pageNumbers);
  return (
    <nav>
      {pageNumbers.map((number) => (
        <li className="page_number" key={number}>
          <a id="page_number_item" href="#">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
