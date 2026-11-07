import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useProduct } from '../hooks/useProducts'
import { getErrorMessage } from '../utils/errorHandler'
import { fichaText } from '../utils/ficha'
import type { Product } from '../types'

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}

async function downloadImage(item: Product) {
  try {
    const { data } = await axios.get<Blob>(item.thumbnail, { responseType: 'blob' })
    downloadBlob(data, `producto-${item.id}.webp`)
  } catch (error) {
    toast.error(getErrorMessage(error))
  }
}

function downloadFicha(item: Product) {
  const blob = new Blob([fichaText(item)], { type: 'text/plain;charset=utf-8' })
  downloadBlob(blob, `producto-${item.id}.txt`)
}

function ProductDetailPage() {
  const { id } = useParams()
  const productId = Number(id)
  const validId = Number.isInteger(productId) && productId > 0
  const { data, isLoading, isError, error } = useProduct(productId)

  return (
    <main className="mx-auto max-w-3xl p-4">
      <Link to="/productos" className="text-sm font-medium text-brand-700 hover:underline">
        ← Volver al listado
      </Link>

      {validId && isLoading && <p className="mt-6 text-slate-500" role="status">Cargando…</p>}

      {(!validId || isError) && (
        <Alert variant="destructive" className="mt-6">
          <AlertDescription>
            {!validId ? 'El identificador del producto no es válido.' : getErrorMessage(error)}
          </AlertDescription>
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
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => downloadImage(data)}>Descargar imagen</Button>
                <Button variant="outline" onClick={() => downloadFicha(data)}>Descargar ficha</Button>
              </div>
            </div>
          </article>
      )}
    </main>
  )
}

export default ProductDetailPage
