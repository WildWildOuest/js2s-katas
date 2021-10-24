export default class DictionaryReplacer {
  replace(input: string, dictionary?: Array<[string, string]>) {
    if (input === "") {
      return "";
    }

    if (typeof dictionary !== "undefined") {
      for (const [source, destination] of dictionary) {
        input = input.replace(`$${source}$`, destination);
      }
      return input;
    }
  }
}
