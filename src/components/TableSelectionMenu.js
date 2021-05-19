import React from "react";

const TableSelectionMenu = ({ selected, deleteSelected }) => {
  return selected.length ? (
    <div className="table-selection-menu">
      <strong>{selected.length} </strong> &nbsp; items selected
      <button className="cancel" onClick={deleteSelected}>
        Delete
      </button>
    </div>
  ) : null;
};

export default TableSelectionMenu;
