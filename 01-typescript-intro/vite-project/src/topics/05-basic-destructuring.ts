interface AudioPlayer {
  audioVolume: number
  songDuration: number
  song: string
  details: Details
}

interface Details {
  author: string
  year: number
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 30,
  song: "Mess",
  details: {
    author: "Paco",
    year: 2024,
  },
}

export const { audioVolume, songDuration, song, details } = audioPlayer

console.table(audioPlayer)

const dbz: string[] = ["Goku", "Vegeta", "Cell"]

const [goku, vegeta, cell] = dbz

export { goku, vegeta, cell }

console.log("Personaje 3:", dbz[3] ?? "Personaje no encontrado")
