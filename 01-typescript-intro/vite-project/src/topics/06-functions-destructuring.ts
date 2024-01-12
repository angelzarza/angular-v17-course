export interface Product {
  description: string
  price: number
}

const phone: Product = {
  description: "Nokia A1",
  price: 300.0,
}

const tablet: Product = {
  description: "iPad Air",
  price: 500.0,
}

interface TaxCalculationOptions {
  tax: number
  products: Product[]
}

// Alternatives
// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  const { tax, products } = options
  let total = 0

  products.forEach(({ price }) => {
    total += price
  })

  return [total, total * tax]
}

const shopingCart = [phone, tablet]
const tax = 0.15

const result = taxCalculation({ products: shopingCart, tax: tax })

const [total, taxProduct] = result

console.log("Total:", total)
console.log("Tax:", taxProduct)

export { shopingCart, result }
