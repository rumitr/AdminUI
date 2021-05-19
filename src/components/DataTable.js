import React, { useState } from "react";
import Info from "./Info";
import Pagination from "./Pagination";
import Searchbar from "./Searchbar";
import TableHeaders from "./TableHeaders";
import TableLength from "./TableLength";
import TableRow from "./TableRow";
import TableSelectionMenu from "./TableSelectionMenu";
import headers from "../config/headers";
import SkeletonTable from "./SkeletonTable";
import pageSizeOptions from "../config/pageSizeOptions";
import usePagination from "../hooks/usePagination";

const DataTable = ({
  users,
  handleEdit,
  handleDelete,
  searchTerm,
  handleSearch,
  status,
  error,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  // const { order, orderBy, sortedUsers, handleRequestSort } = useSort(users);
  const { page, resetPage, pageOptions } = usePagination(
    Math.ceil(users.length / rowsPerPage)
  );

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelections = users.map((row) => row.id);
      setSelected(newSelections);
    } else setSelected([]);
  };

  const search = (e) => {
    resetPage();
    handleSearch(e);
  };
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    resetPage();
  };

  const handleSingleDelete = (id) => {
    if (selected.includes(id))
      setSelected((prev) => prev.filter((i) => i !== id));
    handleDelete(id);
  };

  const handleMultiDelete = (id) => {
    const values = selected;
    handleDelete(values);
    setSelected([]);
  };

  const checkedStatus =
    users.length === selected.length
      ? "blank"
      : selected.length > 0
      ? "indeterminate"
      : "blank";

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelection = [];

    if (selectedIndex === -1) {
      newSelection = newSelection.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelection = newSelection.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelection = newSelection.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelection = newSelection.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelection);
  };

  return (
    <div className="card">
      <Searchbar searchTerm={searchTerm} handleSearch={search} />
      <div className="table-menu-wrapper">
        <TableLength
          rowsPerPageOptions={pageSizeOptions}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TableSelectionMenu
          selected={selected}
          deleteSelected={handleMultiDelete}
        />
      </div>
      <div className="table-wrapper">
        <table className="dataTable hover">
          <TableHeaders
            headers={headers}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            checkedStatus={checkedStatus}
            handleSelectAllClick={handleSelectAllClick}
          />
          <tbody>
            {status === "pending" && <SkeletonTable size={rowsPerPage} />}
            {status === "error" && (
              <tr colspan="" className="cancel">
                {error}
              </tr>
            )}
            {status !== "pending" &&
              users
                .sort(getComparator(order, orderBy))

                .slice(
                  (page - 1) * rowsPerPage,
                  (page - 1) * rowsPerPage + rowsPerPage
                )
                .map((user) => (
                  <TableRow
                    key={user.id}
                    user={user}
                    headers={headers}
                    handleClick={handleClick}
                    selected={selected}
                    handleEdit={handleEdit}
                    handleDelete={handleSingleDelete}
                    searchTerm={searchTerm}
                  />
                ))}
          </tbody>
        </table>
      </div>

      <div className="table-menu-wrapper">
        <Info count={users.length} rowsPerPage={rowsPerPage} page={page} />
        <Pagination pageOptions={pageOptions} />
      </div>
    </div>
  );
};

export default DataTable;
