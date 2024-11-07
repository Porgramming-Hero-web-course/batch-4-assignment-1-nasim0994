function countWordOccurrences(sentence: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, "gi");
  const matches = sentence.match(regex);
  return matches ? matches.length : 0;
}

const result = countWordOccurrences("I love typescript", "typescript");
console.log(result);
