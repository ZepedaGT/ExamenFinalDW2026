import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Recipe } from '../types'

interface Props {
  item: Recipe
  onDelete: (item: Recipe) => void
}

function RecipeCard({ item, onDelete }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={item.image} alt={item.name} className="h-40 w-full bg-slate-100 object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col gap-1 p-3">
        <span className="text-xs uppercase tracking-wide text-brand-700">{item.cuisine}</span>
        <h2 className="line-clamp-2 font-semibold text-slate-900">{item.name}</h2>
        <p className="text-sm text-slate-600">{item.difficulty} · ★ {item.rating}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <Link to={`/recetas/${item.id}`} className="text-sm font-medium text-brand-700 hover:underline">
            Ver detalle
          </Link>
          <Button variant="ghost" size="icon" aria-label={`Eliminar ${item.name}`} onClick={() => onDelete(item)}>
            <Trash2 />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard
