import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "../useToggle";

describe("useToggle Hook", () => {
  test("Should initiate with false as default", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  test("Should initiate with the provided value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  test("Should toggle the value from false to true", () => {
    const { result } = renderHook(() => useToggle());
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
  });
});
