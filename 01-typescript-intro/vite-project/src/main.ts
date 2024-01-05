import "./style.css"
// import { name, hpPoints, isAlive } from "./topics/01-basic-types"
import { warrior } from "./topics/02-object-interface"

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

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Vite app</h1>
  </br>
  <h2>02-object-interface</h2>
  <p>Character: ${warrior.name}</p>
  <p>Life: ${warrior.hp}</p>
  <p>Shield: ${warrior.shield}</p>
  <p>Skills: ${warrior.skills}</p>
`
