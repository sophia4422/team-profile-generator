// describe("", () => {
//   //tests block goes here
//   it("", () => {
//       const expected =
//       const actual =
//   });
// });

const Employee = require("../lib/Employee");

describe("Employee", () => {
  const mockName = "Bob";
  const mockId = "123456";
  const mockEmail = "sophia@email.com";

  const employee = new Employee(mockName, mockId, mockEmail);

  it("should be an instance of Employee", () => {
    expect(employee).toBeInstanceOf(Employee);
  });

  it("should return the expected name", () => {
    expect(employee.getName()).toEqual(mockName);
  });

  it("should return the expected id", () => {
    expect(employee.getId()).toEqual(mockId);
  });

  it("should return the expected email", () => {
    expect(employee.getEmail()).toEqual(mockEmail);
  });

  it("should return the role of Employee", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});
