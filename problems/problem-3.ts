function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const regex = new RegExp(lowerCaseWord, "g");
  const matches = lowerCaseSentence.match(regex);

  return matches ? matches.length : 0;
}

const result = countWordOccurrences(
  "TypeScript is great. I love TypeScript!",
  "typescript"
);
console.log(result);
