import type { Recipe } from '../types'

// Arma el texto de la ficha de una receta. Ya viene hecha: usted solo crea el Blob y lo descarga.
export function fichaText(item: Recipe): string {
  return [
    item.name,
    `Cocina: ${item.cuisine} · Dificultad: ${item.difficulty} · Valoración: ${item.rating}`,
    `Preparación: ${item.prepTimeMinutes} min · Cocción: ${item.cookTimeMinutes} min · Porciones: ${item.servings}`,
    '',
    'Ingredientes',
    ...item.ingredients.map((i) => `- ${i}`),
    '',
    'Instrucciones',
    ...item.instructions.map((s, n) => `${n + 1}. ${s}`),
  ].join('\n')
}
