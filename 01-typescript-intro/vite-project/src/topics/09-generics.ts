function whatsMyType<T>(arg: T): T {
  return arg
}

const amIString = whatsMyType<string>("Hola Mundo")
const amINumber = whatsMyType<number>(100)
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5])

console.log(amIString.split(" "))
console.log(amINumber.toFixed())
console.log(amIArray.join("-"))

export { amIString, amINumber, amIArray }
