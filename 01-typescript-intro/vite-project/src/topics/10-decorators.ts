function classDecorator/* eslint-disable */<T extends { new (...args: any[]): {} }>/* eslint-enable */(constructor: T) {
  return class extends constructor {
    newProperty = "New Property"
    hello = "override"
  }
}

@classDecorator
class SuperClass {
  public myProperty: string = "Text"

  print() {
    console.log("Hola Mundo")
  }
}

console.log(SuperClass)

const myClass = new SuperClass()
console.log(myClass)

export {SuperClass}
