const nesting = require("./nesting");

describe("Nesting - Queues and stacks - Codility", () => {
  it("test 1", () => {
    expect(nesting.solution("()")).toBe(1);
  });

  it("test 2", () => {
    expect(nesting.solution("())")).toBe(0);
  });

  it("test 3", () => {
    expect(nesting.solution("(()(())())")).toBe(1);
  });

  it("test 4", () => {
    expect(nesting.solution("(()(())(())")).toBe(0);
  });

  it("test empty", () => {
    expect(nesting.solution("")).toBe(1);
  });
});
