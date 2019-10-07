const isIPv4Address = require("./isIPv4Address");

describe("Is IPv4 address? - Arcade - Codesignal", () => {
  it("test 1", () => {
    expect(isIPv4Address.isIPv4Address("172.16.254.1")).toBe(true);
  });

  it("test 2", () => {
    expect(isIPv4Address.isIPv4Address("172.316.254.1")).toBe(false);
  });

  it("test 3", () => {
    expect(isIPv4Address.isIPv4Address(".254.255.0")).toBe(false);
  });

  it("test 4", () => {
    expect(isIPv4Address.isIPv4Address("129380129831213981.255.255.255")).toBe(
      false
    );
  });
});
