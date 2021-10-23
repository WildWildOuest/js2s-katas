export const chrimastTree = (rowsAmount: number): string => {
  const arrayOfRowNumbers = Array.from(Array(rowsAmount + 1).keys());

  const leaves = arrayOfRowNumbers
    .map((rowNumber) => {
      if (rowNumber === 0) {
        return "";
      }
      const leftSpacing = " ".repeat(
        arrayOfRowNumbers.length - (rowNumber + 1)
      );
      const stars = "*".repeat(rowNumber * 2 - 1);
      return `${leftSpacing}${stars}`;
    })
    .join("\n");
  const trunk = " ".repeat(arrayOfRowNumbers.length - 2) + "|";

  return `${leaves}\n${trunk}`;
};
