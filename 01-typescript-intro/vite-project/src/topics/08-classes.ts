class Person {
  public name: string
  public country: string

  constructor(name: string, country: string) {
    this.name = name
    this.country = country
  }
}

const person = new Person("Angel", "Spain")
console.table({ person })

export const { name, country } = person
