import React from "react";
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

function escapeRegExp(string) {
  return string && reHasRegExpChar.test(string)
    ? string.replace(reRegExpChar, "\\$&")
    : string || "";
}

const HighlightMatched = ({ match, value }) => {
  const parts = match.length
    ? value.split(new RegExp(`(${escapeRegExp(match)})`, "ig"))
    : [value];

  return (
    <>
      {parts.map((part, index) =>
        part && part.toLowerCase() === match ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
};

export default React.memo(HighlightMatched);
