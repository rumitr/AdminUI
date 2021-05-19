import React, { useState } from "react";
import useToggle from "../hooks/useToggle";
import HighlightMatched from "./HighlightMatched";
import ActionCell from "./ActionCell";

const TableRow = ({
  user,
  headers,
  handleClick,
  selected,
  handleEdit,
  handleDelete,
  searchTerm,
}) => {
  const [edit, toggle] = useToggle();
  const [editedUser, setEditedUser] = useState(user);
  const isSelected = selected?.indexOf(user.id) !== -1;

  const [id, ...columns] = headers;

  const handleInputChange = (event) => {
    setEditedUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const cancelEdit = () => {
    setEditedUser(user);
    toggle();
  };
  const saveEdit = () => {
    toggle();
    handleEdit(editedUser);
  };

  return (
    <tr
      className={isSelected ? "table__row--selected table__row" : "table__row"}
    >
      <td>
        <input
          type="checkbox"
          aria-checked={isSelected}
          checked={isSelected}
          onChange={(e) => handleClick(e, user.id)}
        />
      </td>
      <td>{user[id.key]}</td>
      {columns.map((header) => (
        <td key={header.id}>
          {edit && header.isEditable ? (
            header.options ? (
              <select
                name={header.key}
                onChange={handleInputChange}
                value={editedUser[header.key]}
              >
                {header.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={header.inputType ?? "text"}
                name={header.key}
                value={editedUser[header.key]}
                onChange={handleInputChange}
              />
            )
          ) : (
            <HighlightMatched
              value={editedUser[header.key] ?? user[header.key]}
              match={searchTerm}
            />
          )}
        </td>
      ))}
      <td>
        <ActionCell
          mode={edit ? "edit" : "view"}
          save={saveEdit}
          cancel={cancelEdit}
          deleteRecord={() => handleDelete(user.id)}
          editRecord={toggle}
        />
      </td>
    </tr>
  );
};

export default TableRow;
