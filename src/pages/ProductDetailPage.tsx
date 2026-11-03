import { Link, useParams } from 'react-router-dom'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useProduct } from '../hooks/useProducts'
import { getErrorMessage } from '../utils/errorHandler'
import type { Product } from '../types'

// TODO 3.2 (Detalle): descargue la ficha como archivo producto-{id}.json.
// Use un Blob con JSON.stringify(item, null, 2), URL.createObjectURL, un <a download> temporal
// y libere la URL con URL.revokeObjectURL al terminar.
function downloadFile(item: Product) {
  void item
}

function ProductDetailPage() {
  const { id } = useParams()
  // TODO 3.1: useProduct(Number(id)) ya devuelve los datos cuando complete el hook.
  const { data, isLoading, isError, error } = useProduct(Number(id))

  return (
    <main className="mx-auto max-w-3xl p-4">
      <Link to="/productos" className="text-sm font-medium text-brand-700 hover:underline">
        ← Volver al listado
      </Link>

      {isLoading && <p className="mt-6 text-slate-500" role="status">Cargando…</p>}

      {/* TODO 3.1: si el id no existe (404) debe verse un mensaje claro con getErrorMessage. */}
      {isError && (
        <Alert variant="destructive" className="mt-6">
          <AlertDescription>{getErrorMessage(error)}</AlertDescription>
        </Alert>
      )}

      {data && (
          <article className="mt-4 grid gap-4 sm:grid-cols-2">
            <img src={data.thumbnail} alt={data.title} className="w-full rounded-xl bg-slate-100 object-contain" />
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wide text-brand-700">{data.category}</span>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-xl font-bold">${data.price.toFixed(2)}</p>
              <p className="text-sm text-slate-600">{data.description}</p>
              <p className="text-sm">Stock: {data.stock} · Valoración: {data.rating}</p>
              <Button onClick={() => downloadFile(data)}>Descargar ficha</Button>
            </div>
          </article>
      )}
    </main>
  )
}

export default ProductDetailPage
