import "./style.css"
// import { name, hpPoints, isAlive } from "./topics/01-basic-types"
// import { warrior } from "./topics/02-object-interface"
import { result, resultArrow, warriorHp } from "./topics/03-functions"

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

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Vite app</h1>
  </br>
  <h2>03-functions</h2>
  <p>Result: ${result}</p>
  <p>Result arrow: ${resultArrow}</p>
  <p>Warrior hp: ${warriorHp}</p>
`
