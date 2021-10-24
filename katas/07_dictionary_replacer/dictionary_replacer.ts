export default class DictionaryReplacer {
  replace(input: string, dictionary?: Array<[string, string]>) {
    if (input === "") {
      return "";
    }

    if (typeof dictionary !== "undefined") {
      for (const [source, destination] of dictionary) {
        const sourceInstanecs = new RegExp(`\\$${source}\\$`, "g");
        input = input.replace(sourceInstanecs, destination);
      }
      return input;
    }
  }
}
