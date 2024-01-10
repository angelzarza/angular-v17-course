import "./style.css"
// import { name, hpPoints, isAlive } from "./topics/01-basic-types"
// import { warrior } from "./topics/02-object-interface"
// import { result, resultArrow, warriorHp } from "./topics/03-functions"
import { audioVolume, songDuration, song, details } from "./topics/05-basic-destructuring"

/*
* * Exercises by categories
*/

/* <h2>01-basic-types</h2>
<p>name: ${name}</p>
<p>hpPoints: ${hpPoints}</p>
<p>isAlive: ${isAlive}</p> */

/* <h2>02-object-interface</h2>
<p>Character: ${warrior.name}</p>
<p>Life: ${warrior.hp}</p>
<p>Shield: ${warrior.shield}</p>
<p>Skills: ${warrior.skills}</p> */

/* <h2>03-functions</h2>
<p>Result: ${result}</p>
<p>Result arrow: ${resultArrow}</p>
<p>Warrior hp: ${warriorHp}</p> */

/* <h2>05-basic-destructuring</h2>
<p>Audio Volume: ${audioVolume}</p>
<p>Song Duration: ${songDuration}</p>
<p>Song: ${song}</p>
<p>Author: ${details.author}</p>
<p>Year: ${details.year}</p> */

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Vite app</h1>
  </br>
  <h2>05-basic-destructuring</h2>
  <p>Audio Volume: ${audioVolume}</p>
  <p>Song Duration: ${songDuration}</p>
  <p>Song: ${song}</p>
  <p>Author: ${details.author}</p>
  <p>Year: ${details.year}</p>
`
