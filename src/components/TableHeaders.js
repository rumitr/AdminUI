import React from "react";
import IndeterminateCheckbox from "./ICB";
// import Asc from "url:../icons/ascending.svg";
// import Desc from "url:../icons/descending.svg";

const TableHeaders = ({
  headers,
  order,
  orderBy,
  onRequestSort,
  handleSelectAllClick,
  checkedStatus,
}) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <thead>
      <tr>
        <th>
          <IndeterminateCheckbox
            checkedStatus={checkedStatus}
            action={handleSelectAllClick}
          />
        </th>
        {headers.map((header) => (
          <TableSortLabel
            active={orderBy === header.key}
            direction={orderBy === header.key ? order : "asc"}
            onClick={createSortHandler(header.key)}
            key={header.key}
          >
            <div className="table__header__cell__wrapper">
              {header.label}
              {orderBy === header.key ? (
                <span>{order === "desc" ? <Desc /> : <Asc />}</span>
              ) : null}
            </div>
          </TableSortLabel>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
  );
};

const TableSortLabel = ({ active, direction, onClick, children }) => {
  return <th onClick={onClick}>{children}</th>;
};

const Asc = () => <> &nbsp; &uarr;</>;
const Desc = () => <> &nbsp; &darr;</>;

export default TableHeaders;
