interface Character {
  character: string
  hp: number
  showHp: () => number
}

function addNumbers(a: number, b: number): number {
  return a + b
}

const addNumbersArrow = (a: number, b: number): number => {
  return a + b
}

const healCharacter = (character: Character, amount: number): number => {
  return character.hp += amount
}

const warrior: Character = {
  character: "Warrior",
  hp: 10,
  showHp() {
    return this.hp
  },
}

console.log("Warrior current hp: ", warrior.showHp())

const warriorHp = healCharacter(warrior, 20)

console.log("Warrior increment hp: ", warriorHp)

const result = addNumbers(2, 2)
const resultArrow = addNumbersArrow(1, 1)

console.table({ result, resultArrow })

export { result, resultArrow, warriorHp }
