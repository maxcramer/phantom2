import React from "react";

import "./Pagination.css";

const Pagination = ({ urlsPerPage, totalUrls, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUrls / urlsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="paginate_parent">
        {pageNumbers.map((number) => (
          <li className="page_number" key={number}>
            <a id="page_number_item" href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
