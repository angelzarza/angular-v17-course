interface CharacterInterface {
  name: string,
  hp: number,
  shield: boolean,
  skills: string[],
  level?: number
}

const warrior: CharacterInterface = {
  name: "warrior",
  hp: 100,
  shield: true,
  skills: ["dash", "block"]
}

console.table(warrior)

export { warrior }
