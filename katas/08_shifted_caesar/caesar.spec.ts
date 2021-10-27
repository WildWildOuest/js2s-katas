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

  it('should handle an initial shift of 5', () => {
    const rawString = 'abc';
    const shift = 5;
    expect(shiftedCaesar(rawString, shift)).toEqual('fhj');
  });

  it('should handle alphabet overflow', () => {
    const rawString = 'xyz';
    const shift = 2;
    expect(shiftedCaesar(rawString, shift)).toEqual('zbd');
  });

  it('should handle alphabet large overflow', () => {
    const rawString = 'xyz';
    const shift = 27;
    expect(shiftedCaesar(rawString, shift)).toEqual('yac');
  });
});
