import { api } from './api'
import type { Recipe, ListFilters, RecipesResponse } from '../types'

export const PAGE_SIZE = 8

export const recipeService = {
  // TODO 2.1 (Listado): GET /auth/recipes con params limit=PAGE_SIZE y skip=(page - 1) * PAGE_SIZE.
  // Si hay texto de búsqueda (q), use GET /auth/recipes/search con el parámetro q.
  list: async ({ page, q }: ListFilters): Promise<RecipesResponse> => {
    void api
    void page
    void q
    throw new Error('list no implementado')
  },

  // TODO 3.1 (Detalle): GET /auth/recipes/{id}.
  getById: async (id: number): Promise<Recipe> => {
    void id
    throw new Error('getById no implementado')
  },

  // TODO 4.3 (Crear): POST /recipes/add enviando el FormData (multipart/form-data).
  create: async (body: FormData): Promise<Recipe> => {
    void body
    throw new Error('create no implementado')
  },

  // TODO 4.4 (Eliminar): DELETE /recipes/{id}.
  remove: async (id: number): Promise<Recipe> => {
    void id
    throw new Error('remove no implementado')
  },
}
