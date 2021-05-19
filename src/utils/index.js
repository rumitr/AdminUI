export const pageRange = (start, end) =>
  Array.from({ length: end - start + 1 }).map((val, index) => index + start);

export const validateInteger = (value) =>
  isNaN(parseInt(value)) ? null : parseInt(value);

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
