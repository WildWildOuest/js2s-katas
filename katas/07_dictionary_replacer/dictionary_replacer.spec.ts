import DictionaryReplacer from "./dictionary_replacer";

describe("dictionary replacer", () => {
  let replacer: DictionaryReplacer;

  beforeEach(() => {
    replacer = new DictionaryReplacer();
  });

  it("returns an empty string for an empty string ", () => {
    expect(replacer.replace("")).toEqual("");
  });

  it("replaces a dictionary entry in the sentence", () => {
    expect(replacer.replace("$temp$", [["temp", "temporary"]])).toEqual(
      "temporary"
    );
  });

  it("replaces multiple dictionary entries in the sentence", () => {
    expect(
      replacer.replace("$temp$ here comes the name $name$", [
        ["temp", "temporary"],
        ["name", "John Doe"],
      ])
    ).toEqual("temporary here comes the name John Doe");
  });

  it("replaces multiple dictionary entries appearing multiple times in the sentence", () => {
    expect(
      replacer.replace("$temp$ ($temp$) here comes the name $name$", [
        ["temp", "temporary"],
        ["name", "John Doe"],
      ])
    ).toEqual("temporary (temporary) here comes the name John Doe");
  });
});
