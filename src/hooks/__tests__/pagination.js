import { renderHook } from "@testing-library/react-hooks";
import usePagination from "../usePagination";

describe("usePagination Hook", () => {
  test("Should initiate with false as default", () => {
    const { result } = renderHook(() => usePagination());
    expect(result.current.page).toBe(1);
    expect(result.current.pageOptions.length).toBe(3); //First ... Last
  });

  test("Should initiate with the provided value", () => {
    const { result } = renderHook(() => usePagination(100));
    expect(result.current.page).toBe(1);
    expect(result.current.pageOptions.length).toBe(8);
  });
});
