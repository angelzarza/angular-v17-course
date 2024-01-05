function addNumbers(a: number, b: number): number {
  return a + b
}

const addNumbersArrow = (a: number, b: number): number => {
  return a + b
}

const result = addNumbers(2, 2)
const resultArrow = addNumbersArrow(1, 1)

console.table({ result, resultArrow })

export { result, resultArrow }
