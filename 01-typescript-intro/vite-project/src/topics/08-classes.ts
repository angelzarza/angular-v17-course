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

export class Hero extends Person {
  power: string

  constructor(name: string, country: string, power: string) {
    super(name, country)
    this.power = power
  }
}

const hero = new Hero("Loki", "Asghard", "Mimic")
console.table({ hero })

export const { name, country } = person
