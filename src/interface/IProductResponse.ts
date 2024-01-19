export interface IGetAllProductResponse {
  limit: number
  products: IProductDetail[]
  skip: number
  total: number
}
export interface IProductDetail {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: number
  category: string
  thumbnail: number
  images: string[]
}
