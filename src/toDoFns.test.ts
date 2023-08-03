import { greet } from "./toDoFns";

test.skip("test greet", () => {
  expect(greet()).toBe("Hi");
});
