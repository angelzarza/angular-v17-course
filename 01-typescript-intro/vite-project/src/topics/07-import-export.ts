import { Product, taxCalculation } from "./06-functions-destructuring"

const shopingCart: Product[] = [
  { description: "Nokia", price: 100 },
  { description: "iPad", price: 200 },
]

const tax = 0.15

export const [total, taxProduct] = taxCalculation({products: shopingCart, tax: tax})

console.log("Total:", total)
console.log("Tax:", taxProduct)
