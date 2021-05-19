import React from "react";

const editModes = {
  edit: ({ save, cancel }) => (
    <>
      <button onClick={save}>Save</button>
      <button className="cancel" onClick={cancel}>
        Cancel
      </button>
    </>
  ),
  view: ({ editRecord, deleteRecord }) => (
    <>
      <button className="warn" onClick={editRecord}>
        Edit
      </button>
      <button className="cancel" onClick={deleteRecord}>
        Delete
      </button>
    </>
  ),
};

const ActionCell = ({ mode, ...actions }) => {
  const Actions = editModes[mode];
  return <Actions {...actions} />;
};

export default ActionCell;
