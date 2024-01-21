interface Passenger {
  name: string
  children?: string[]
}

const passenger1: Passenger = {
  name: "Angel",
}

const passenger2: Passenger = {
  name: "Jose",
  children: ["Natalia", "Melissa"],
}

const returnChildrenNumber = (passenger: Passenger) => {
  const howManyChilders = passenger.children?.length ?? 0
  const { name } = passenger
  console.log("Nombre:", name, "Hijos:", howManyChilders)
}

returnChildrenNumber(passenger1)
returnChildrenNumber(passenger2)

export { passenger1, passenger2 }
