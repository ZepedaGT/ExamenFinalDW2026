import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { recipeService } from '../services/recipeService'
import type { ListFilters } from '../types'
import { getErrorMessage } from '../utils/errorHandler'

export function useRecipes(filters: ListFilters) {
  return useQuery({
    queryKey: ['recipes', filters],
    queryFn: () => recipeService.list(filters),
    placeholderData: keepPreviousData,
  })
}

export function useRecipe(id: number) {
  return useQuery({
    queryKey: ['recipe', id],
    queryFn: () => recipeService.getById(id),
    retry: false,
    enabled: Number.isInteger(id) && id > 0,
  })
}

export function useCreateRecipe() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: recipeService.create,
    onSuccess: () => {
      toast.success('Receta creada correctamente.')
      return queryClient.invalidateQueries({ queryKey: ['recipes'] })
    },
    onError: (error) => toast.error(getErrorMessage(error)),
  })
}

export function useDeleteRecipe() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: recipeService.remove,
    onSuccess: () => {
      toast.success('Receta eliminada correctamente.')
      return queryClient.invalidateQueries({ queryKey: ['recipes'] })
    },
    onError: (error) => toast.error(getErrorMessage(error)),
  })
}

