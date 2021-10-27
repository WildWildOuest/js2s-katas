export const shiftedCaesar = (rawString: string, shift: number) => {
  return rawString
    .split('')
    .map((letter, index) => {
      const letterCharCode = rawString.charCodeAt(index);
      const letterShfit = index + shift;
      return String.fromCharCode(letterCharCode + letterShfit);
    })
    .join('');
};
