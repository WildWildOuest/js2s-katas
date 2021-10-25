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
});
