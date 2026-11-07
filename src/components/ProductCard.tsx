import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Product } from '../types'

interface Props {
  item: Product
  onDelete: (item: Product) => void
}

function ProductCard({ item, onDelete }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={item.thumbnail} alt={item.title} className="h-40 w-full bg-slate-100 object-contain" loading="lazy" />
      <div className="flex flex-1 flex-col gap-1 p-3">
        <span className="text-xs uppercase tracking-wide text-brand-700">{item.category}</span>
        <h2 className="line-clamp-2 font-semibold text-slate-900">{item.title}</h2>
        <p className="text-lg font-bold text-slate-900">${item.price.toFixed(2)}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <Link to={`/productos/${item.id}`} className="text-sm font-medium text-brand-700 hover:underline">
            Ver detalle
          </Link>
          <Button variant="ghost" size="icon" aria-label={`Eliminar ${item.title}`} onClick={() => onDelete(item)}>
            <Trash2 />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
