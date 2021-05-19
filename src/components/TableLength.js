import React from "react";

const TableLength = ({
  rowsPerPage,
  rowsPerPageOptions,
  onChangeRowsPerPage,
}) => {
  return (
    <div className="length_wrapper">
      <label>Show</label>
      <select
        data-testid="rowsPerPage"
        value={rowsPerPage}
        onChange={onChangeRowsPerPage}
      >
        {rowsPerPageOptions.map((option) => (
          <option role="option" key={option}>
            {option}
          </option>
        ))}
      </select>
      <label> entries</label>
    </div>
  );
};

export default TableLength;
