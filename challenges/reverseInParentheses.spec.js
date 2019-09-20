const reverseInParentheses = require("./reverseInParentheses");

describe("Reverse characters in (possibly nested) parentheses", function() {
  it("test 1", function() {
    const result = reverseInParentheses.reverseInParentheses("(bar)");
    expect(result).toEqual("rab");
  });

  it("test 2", function() {
    const result = reverseInParentheses.reverseInParentheses("foo(bar)baz");
    expect(result).toEqual("foorabbaz");
  });

  it("test 3", () => {
    const result = reverseInParentheses.reverseInParentheses(
      "foo(bar(baz))blim"
    );
    expect(result).toEqual("foobazrabblim");
  });
});

describe("Reverse group", function() {
  it("test 1", function() {
    const result = reverseInParentheses.reverseGroup(
      { start: 7, end: 11 },
      "foo(bar(baz))blim"
    );
    expect(result).toEqual("foo(bar(zab))blim");
  });
});
