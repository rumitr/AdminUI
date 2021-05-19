import React from "react";
import { pageRange } from "../utils";

const SkeletonTable = ({ size = 5 }) => {
  const tableRows = pageRange(0, size);
  return tableRows.map((index) => (
    <tr data-testid="skeleton-element" className="skeleton__row" key={index}>
      <td>
        <div className="skeleton__bar"></div>
      </td>
      <td>
        <div className="skeleton__bar"></div>
      </td>
      <td>
        <div className="skeleton__bar"></div>
      </td>
      <td>
        <div className="skeleton__bar"></div>
      </td>
      <td>
        <div className="skeleton__bar"></div>
      </td>
      <td>
        <div className="skeleton__bar"></div>
      </td>
    </tr>
  ));
};

export default SkeletonTable;
