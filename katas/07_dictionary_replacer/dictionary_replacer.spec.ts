import DictionaryReplacer from "./dictionary_replacer";

describe("dictionary replacer", () => {
  let replacer: DictionaryReplacer;

  beforeEach(() => {
    replacer = new DictionaryReplacer();
  });

  it('input : "", dict empty, output:""', () => {
    expect(replacer.replace("")).toEqual("");
  });

  it('input : "$temp$", dict ["temp", "temporary"], output: "temporary"', () => {
    expect(replacer.replace("$temp$", [["temp", "temporary"]])).toEqual(
      "temporary"
    );
  });
});
