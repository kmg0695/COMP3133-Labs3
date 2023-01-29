import { add, mul, div, sub } from "../calculator.cjs";
import { expect } from "chai";

describe("Calculator Tests", () => {
  it("should return 7 for add(5, 2)", () => {
    expect(add(5, 2)).to.equal(7);
  });
  it("should return 8 for add(5, 2)", () => {
    expect(add(5, 2)).to.equal(8);
  });
  it("should return 3 for sub(5, 2)", () => {
    expect(sub(5, 2)).to.equal(3);
  });
  it("should return 5 for sub(5, 2)", () => {
    expect(sub(5, 2)).to.equal(5);
  });
  it("should return 10 for mul(5, 2)", () => {
    expect(mul(5, 2)).to.equal(10);
  });
  it("should return 12 for mul(5, 2)", () => {
    expect(mul(5, 2)).to.equal(12);
  });
  it("should return 5 for div(10, 2)", () => {
    expect(div(10, 2)).to.equal(5);
  });
  it("should return 2 for div(10, 2)", () => {
    expect(div(10, 2)).to.equal(2);
  });
});
