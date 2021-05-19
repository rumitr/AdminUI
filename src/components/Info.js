import React from "react";

const Info = ({ count, rowsPerPage, page }) => {
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex =
    (page - 1) * rowsPerPage + rowsPerPage > count
      ? count
      : (page - 1) * rowsPerPage + rowsPerPage;

  return (
    <div
      className="dataTables_info"
      id="example_info"
      role="status"
      aria-live="polite"
    >
      Showing {startIndex + 1} to {endIndex} of {count} entries
    </div>
  );
};

export default Info;
