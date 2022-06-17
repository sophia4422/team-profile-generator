const Intern = require("../lib/Intern");

describe("Intern", () => {
  const mockName = "Sophhhh";
  const mockId = "2222244444";
  const mockEmail = "sophia@email.com";
  const mockSchool = "Aston";

  const intern = new Intern(mockName, mockId, mockEmail, mockSchool);

  it("should be an instance of Intern", () => {
    expect(intern).toBeInstanceOf(Intern);
  });

  it("should return the expected name", () => {
    expect(intern.getName()).toEqual(mockName);
  });

  it("should return the expected id", () => {
    expect(intern.getId()).toEqual(mockId);
  });

  it("should return the expected email", () => {
    expect(intern.getEmail()).toEqual(mockEmail);
  });

  it("should return the expected school", () => {
    expect(intern.getSchool()).toEqual(mockSchool);
  });

  it("should return the role of Intern", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
