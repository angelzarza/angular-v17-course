import "./style.css"
// import { name, hpPoints, isAlive } from "./topics/01-basic-types"
// import { warrior } from "./topics/02-object-interface"
// import { result, resultArrow, warriorHp } from "./topics/03-functions"
// import { audioVolume, songDuration, song, details } from "./topics/05-basic-destructuring"
// import { shopingCart, result } from "./topics/06-functions-destructuring"
// import { total, taxProduct } from "./topics/07-import-export"
// import { name, country } from "./topics/08-classes"
import { amIString, amINumber, amIArray } from "./topics/09-generics"

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

/* <h2>06-functions-destructuring</h2>
<p>Carro: ${shopingCart[0].description}, ${shopingCart[1].description}</p>
<p>Total: ${result}</p> */

/* <h2>07-import-export</h2>
<p>Total: ${total}</p>
<p>Tax total: ${taxProduct}</p> */

/* <h2>08-classes</h2>
<p>Nombre: ${name}</p>
<p>País: ${country}</p> */

/* <h2>09-generics</h2>
<p>String: ${amIString}</p>
<p>Number: ${amINumber}</p>
<p>Array: ${amIArray}</p> */

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Vite app</h1>
  </br>
  <h2>09-generics</h2>
  <p>String: ${amIString}</p>
  <p>Number: ${amINumber}</p>
  <p>Array: ${amIArray}</p>
`
