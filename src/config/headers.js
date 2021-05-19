const headers = [
  { label: "Id", key: "id", isEditable: false },
  { label: "Name", key: "name", isEditable: true, inputType: "text" },
  { label: "Email", key: "email", isEditable: true, inputType: "email" },
  {
    label: "role",
    key: "role",
    isEditable: true,
    options: ["member", "admin"],
  },
];

export default headers;
