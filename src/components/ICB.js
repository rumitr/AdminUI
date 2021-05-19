import React, { useRef, useLayoutEffect } from "react";

const IndeterminateCheckbox = ({ action, checkedStatus }) => {
  const checkRef = useRef();

  useLayoutEffect(() => {
    checkRef.current.indeterminate = checkedStatus === "indeterminate";
  }, [checkedStatus]);

  return <input type="checkbox" ref={checkRef} onClick={action} />;
};

export default IndeterminateCheckbox;
