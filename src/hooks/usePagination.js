import { useState } from "react";
import { pageRange } from "../utils";

const usePagination = (count) => {
  const [page, setPage] = useState(1);
  const startNode = Math.max(Math.min(page - 2, count - 2 * 2), 1);
  const endNode = Math.min(Math.max(page + 2, 2 * 2 + 1), count);

  const resetPage = () => setPage(1);

  const handleClick = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  const itemList = [
    "first",
    ...(startNode !== 1 ? ["ellipsis"] : []),
    ...pageRange(startNode, endNode),
    ...(endNode < count ? ["ellipsis"] : []),
    "last",
  ];

  const buttonPage = (type) => {
    switch (type) {
      case "first":
        return 1;
      case "last":
        return count;
      default:
        return null;
    }
  };

  const items = itemList.map((item) => {
    return typeof item === "number"
      ? {
          onClick: (event) => {
            handleClick(event, item);
          },
          type: "page",
          page: item,
          selected: item === page,
          "aria-current": item === page ? "page" : undefined,
          "aria-label": item === page ? "Current" : undefined,
        }
      : {
          onClick: (event) => {
            handleClick(event, buttonPage(item));
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            item.indexOf("ellipsis") === -1 &&
            (item === "next" || item === "last" ? page >= count : page <= 1),
        };
  });

  return {
    page,
    resetPage,
    pageOptions: items,
  };
};
export default usePagination;
