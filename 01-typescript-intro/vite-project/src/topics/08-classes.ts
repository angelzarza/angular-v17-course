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

export class OtherHero {
  name: string
  country: string
  power: string

  constructor(
    name: string,
    country: string,
    power: string,
    public person: Person
  ) {
    this.name = name
    this.country = country
    this.power = power
  }
}

export const personTwo = new Person("Thor", "Ashgard")
export const heroTwo = new OtherHero("Loki", "Asghard", "Mimic", personTwo)
console.table({ personTwo })
console.table({ heroTwo })

export const { name, country } = person
