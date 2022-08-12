const { format_expensive } = require("../utils/helpers");

test("format_expensive() returns the number of $$'s that are represnted in Restaurant model", () => {
  const expense1 = format_expensive(1);
  const expense3 = format_expensive(3);

  expect(expense1).toBe("$");
  expect(expense3).toBe("$$$");
});
