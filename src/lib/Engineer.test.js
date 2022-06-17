const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const mockName = "Fred";
  const mockId = "45094509";
  const mockEmail = "sophia@email.com";
  const mockGitHub = "GitUsername";

  const engineer = new Engineer(mockName, mockId, mockEmail, mockGitHub);

  it("should be an instance of Engineer", () => {
    expect(engineer).toBeInstanceOf(Engineer);
  });

  it("should return the expected name", () => {
    expect(engineer.getName()).toEqual(mockName);
  });

  it("should return the expected id", () => {
    expect(engineer.getId()).toEqual(mockId);
  });

  it("should return the expected email", () => {
    expect(engineer.getEmail()).toEqual(mockEmail);
  });

  it("should return the expected GitHub username", () => {
    expect(engineer.getGithubUsername()).toEqual(mockGitHub);
  });

  it("should return the role of Engineer", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
