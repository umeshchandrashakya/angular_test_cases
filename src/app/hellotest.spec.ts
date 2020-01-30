describe("These are my Own test cases ", () => {
  let expected = "";
  let notExpected = "";
  beforeEach(() => {
    expected = "Hi How are you?";
    notExpected = "HCl Lucknow";
  });
  it("check if two text are equals", () => {
    expect("Hi How are you?").toBe(expected);
  });
  it("When to text are not equal", () => {
    expect("HCl").not.toBe(notExpected);
  });
});
