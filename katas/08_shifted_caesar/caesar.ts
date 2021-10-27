export const shiftedCaesar = (rawString: string, shift: number) => {
  const Z_LETTER_CHAR_CODE = 122;
  const ALPHABET_LENGTH = 26;
  return rawString
    .split('')
    .map((_letter, index) => {
      const letterCharCode = rawString.charCodeAt(index);
      const letterShift = index + (shift % ALPHABET_LENGTH);
      let shiftedLetterCharCode = letterCharCode + letterShift;

      if (shiftedLetterCharCode > Z_LETTER_CHAR_CODE) {
        shiftedLetterCharCode -= ALPHABET_LENGTH;
      }
      return String.fromCharCode(shiftedLetterCharCode);
    })
    .join('');
};
