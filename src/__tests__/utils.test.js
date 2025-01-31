// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  it("handles case insensitivity", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters.");
    expect(() => isPalindrome("hello!")).toThrow("Input must contain only alphabetic characters.");
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12345)).toThrow("Input must be a string.");
    expect(() => isPalindrome(["racecar"])).toThrow("Input must be a string.");
  });
});
