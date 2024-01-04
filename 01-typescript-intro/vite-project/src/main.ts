import "./style.css"
import {name, hpPoints, isAlive} from "./topics/01-basic-types"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Vite app</h1>
  </br>
  <p>name: ${name}</p>
  <p>hpPoints: ${hpPoints}</p>
  <p>isAlive: ${isAlive}</p>
`
