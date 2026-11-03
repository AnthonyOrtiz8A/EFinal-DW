export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  stock: number
  rating: number
  thumbnail: string
  images: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface AuthUser {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  image: string
}

export interface LoginResponse extends AuthUser {
  accessToken: string
  refreshToken: string
}

export interface ListFilters {
  page: number
  q: string
}
