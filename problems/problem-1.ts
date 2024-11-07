function sumArray(numbers: number[]): number {
  return numbers?.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
