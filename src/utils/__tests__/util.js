import { pageRange, validateInteger, capitalize } from "../index";

test("page range", () => {
  let input = [4, 8];
  const result = pageRange(...input);
  expect(result).toStrictEqual([4, 5, 6, 7, 8]);
});

test("capitalize", () => {
  expect(capitalize("rumit")).toStrictEqual("Rumit");
});

test("validate integer", () => {
  expect(validateInteger("Rumit")).toStrictEqual(null);
  expect(validateInteger(67)).toStrictEqual(67);
  expect(validateInteger("67")).toStrictEqual(67);
});
