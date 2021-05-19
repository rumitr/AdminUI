import React from "react";
import { capitalize } from "../utils";

const Pagination = ({ pageOptions }) => {
  return (
    <nav className="pagination" data-testid="pagination">
      {pageOptions.map((node) =>
        node.type === "ellipsis" ? (
          <Ellipsis />
        ) : (
          <button
            role="navigation"
            disabled={node.disabled}
            aria-current={node["aria-current"]}
            aria-label={node["aria-label"]}
            onClick={(e) => node.onClick(e, node)}
          >
            {node.type === "page" ? node.page : capitalize(node.type)}
          </button>
        )
      )}
    </nav>
  );
};

const Ellipsis = () => <button>...</button>;
export default Pagination;
