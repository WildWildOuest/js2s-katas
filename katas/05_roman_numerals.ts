/**

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

*/

/* JS */


/* TS */
/* naive implementation */
function romanNumeralsNaive(roman: string): number {
    const dictionnary = new Map<string, number>(
        [
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000],
        ]
    );
    let total = 0;
    const letters = [...roman];
    for (const [index, letter] of letters.entries()) {

        let leftLetterAlterer: boolean | string = false;
        ['I', 'X', 'C'].forEach((alterer) => {
            if (letters[index - 1] === alterer
                && letters[index] !== alterer
                && dictionnary.get(letter)! > dictionnary.get(alterer)!
            ) {
                leftLetterAlterer = alterer;
            }
        });

        total += dictionnary.get(letter)!;
        if (leftLetterAlterer) {
            total -= 2 * dictionnary.get(leftLetterAlterer)!;
        }

    }
    return total;
}
/* reworked */
function romanNumeralsReworked(roman: string) {
    const table = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    return roman.split('').reduceRight((prev, cur, i, arr) => {
        return table[arr[i + 1]] > table[cur] ? prev - table[cur] : prev + table[cur];
    }, 0);
}