export const chrimastTree = (rowsAmount: number): string => {
  const arrayOfRowNumbers = Array.from(Array(rowsAmount + 1).keys());
  const numberOfRows = arrayOfRowNumbers.length;

  const leaves = arrayOfRowNumbers
    .map((rowNumber) => {
      if (rowNumber === 0) {
        return "";
      }
      const leftSpacing = getCurrentRowLeftSpacing(numberOfRows, rowNumber);
      const stars = getCurrentRowStars(rowNumber);
      return `${leftSpacing}${stars}`;
    })
    .join("\n");

  const trunk = `${getHalfTreeWidth(numberOfRows)}|`;

  return `${leaves}\n${trunk}`;
};


const getCurrentRowLeftSpacing = (numberOfRows: number, rowNumber: number) => {
  return " ".repeat(numberOfRows - (rowNumber + 1));
};

const getCurrentRowStars = (rowNumber: number) => {
  return "*".repeat(rowNumber * 2 - 1);
};

const getHalfTreeWidth = (numberOfRows: number) => {
    return " ".repeat(numberOfRows - 2);
  };
  