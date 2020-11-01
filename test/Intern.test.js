const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const employee = new Intern("Foo", 1, "test@test.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(employee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const employee = new Intern("Foo", 1, "test@test.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});
