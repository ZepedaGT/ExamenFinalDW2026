export interface Recipe {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  image: string
  rating: number
  mealType: string[]
}

export interface RecipesResponse {
  recipes: Recipe[]
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
