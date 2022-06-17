const Manager = require("../lib/Manager");

describe("Manager", () => {
  const mockName = "Papa Elf";
  const mockId = "222222";
  const mockEmail = "soph@email.com";
  const mockOfficeNumber = "5";

  const manager = new Manager(mockName, mockId, mockEmail, mockOfficeNumber);

  it("should be an instance of Manager", () => {
    expect(manager).toBeInstanceOf(Manager);
  });

  it("should return the expected name", () => {
    expect(manager.getName()).toEqual(mockName);
  });

  it("should return the expected id", () => {
    expect(manager.getId()).toEqual(mockId);
  });

  it("should return the expected email", () => {
    expect(manager.getEmail()).toEqual(mockEmail);
  });

  it("should return the expected office number", () => {
    expect(manager.getOfficeNumber()).toEqual(mockOfficeNumber);
  });

  it("should return the role of Manager", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});
