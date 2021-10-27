import { shiftedCaesar } from './caesar';

describe('shifted caesar', () => {
  it('should handle an initial shift of 1', () => {
    const rawString = 'abc';
    const shift = 1;
    expect(shiftedCaesar(rawString, shift)).toEqual('bdf');
  });

  it('should handle an initial shift of 2', () => {
    const rawString = 'abc';
    const shift = 2;
    expect(shiftedCaesar(rawString, shift)).toEqual('ceg');
  });
});
