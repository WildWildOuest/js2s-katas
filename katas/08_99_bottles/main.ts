export default class BeerSong {
  sing(start: number, end: number = 0) {
    const versesNumbers = Array.from({ length: start - end + 1 }, (_, index) => index + end).reverse();
    return versesNumbers.map((verseNumber) => this.verse(verseNumber)).join('');
  }

  verse(verseNumber: number) {
    if (verseNumber === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    if (verseNumber === 1) {
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    }
    if (verseNumber === 2) {
      return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    }
    return `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\nTake one down and pass it around, ${
      verseNumber - 1
    } bottles of beer on the wall.\n`;
  }
}
