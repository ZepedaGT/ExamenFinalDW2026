import { recipeService } from '../services/recipeService'
import type { Recipe, ListFilters, RecipesResponse } from '../types'

// TODO 2.2 (Listado): useRecipes(filters) con useQuery. La queryKey debe incluir los filtros y la
// consulta no debe parpadear al cambiar de página (placeholderData: keepPreviousData).
export function useRecipes(filters: ListFilters) {
  void recipeService
  void filters
  return { data: undefined as RecipesResponse | undefined, isLoading: false, isError: false, error: null as unknown, refetch: () => {}, isFetching: false }
}

// TODO 3.1 (Detalle): useRecipe(id) con useQuery; sin reintentos (retry: false) para que un 404 se muestre de inmediato.
export function useRecipe(id: number) {
  void id
  return { data: undefined as Recipe | undefined, isLoading: false, isError: false, error: null as unknown }
}

// TODO 4.3 (Crear): useCreateRecipe() con useMutation. Al terminar: toast de éxito y invalidar la lista.
// Si falla: toast de error con getErrorMessage.
export function useCreateRecipe() {
  return {
    mutate: (body: FormData, options?: { onSuccess?: () => void }) => {
      void body
      void options
    },
    isPending: false,
  }
}

// TODO 4.4 (Eliminar): useDeleteRecipe() con useMutation. Mismo patrón que crear.
export function useDeleteRecipe() {
  return {
    mutate: (id: number) => {
      void id
    },
    isPending: false,
  }
}
