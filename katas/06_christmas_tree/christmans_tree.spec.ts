import { chrimastTree } from "./christmas_tree";

describe("christmasTree", () => {
  it("renders a three rows tree", () => {
    const expectedTree = `
  *
 ***
*****
  |`;
    expect(chrimastTree(3)).toEqual(expectedTree);
  });

  it("renders a four rows tree", () => {
    const expectedTree = `
   *
  ***
 *****
*******
   |`;
    expect(chrimastTree(4)).toEqual(expectedTree);
  });

  it("renders a five rows tree", () => {
    const expectedTree = `
    *
   ***
  *****
 *******
*********
    |`;
    expect(chrimastTree(5)).toEqual(expectedTree);
  });
});
