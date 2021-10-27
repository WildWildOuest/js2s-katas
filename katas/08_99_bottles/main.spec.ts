import BeerSong from './main';

describe('99 bottles of beer', () => {
  let song: BeerSong;
  beforeEach(() => {
    song = new BeerSong();
  });

  it('returns the verse for 1 bottle of beer', () => {
    const expectedVerse =
      '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    expect(song.verse(1)).toEqual(expectedVerse);
  });

  it('returns the verse for 2 bottles of beer', () => {
    const expectedVerse =
      '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    expect(song.verse(2)).toEqual(expectedVerse);
  });

  it('returns the verse for any amout of bottles of beer superior to two', () => {
    const expectedVerse =
      '5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n';
    expect(song.verse(5)).toEqual(expectedVerse);
  });

  it('returns the verse for 0 bottles of beer', () => {
    const expectedVerse =
      'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.verse(0)).toEqual(expectedVerse);
  });

  it('returns the song from a given verse down to another one', () => {
    const expectedVerses =
      '10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n';
    expect(song.sing(10, 9)).toEqual(expectedVerses);
  });

  it('returns the song from a given verse down to the end', () => {
    const expectedVerses =
      '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.sing(2)).toEqual(expectedVerses);
  });
});
