export interface Product {
  id: number
  title: string
  price: number
  rest: number
  reviews: Review[]
}

export interface Review {
  id: number
  name: string
  text: string
  value: number
}