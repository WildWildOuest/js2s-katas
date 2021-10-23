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
});
