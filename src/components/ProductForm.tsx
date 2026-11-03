import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useCreateProduct } from '../hooks/useProducts'

const MAX_IMAGE_BYTES = 1024 * 1024
const IMAGE_TYPES = ['image/jpeg', 'image/png']

// TODO 4.1 (Crear): defina el esquema Zod del formulario con estas reglas y obtenga el tipo con z.infer.
//   - title: z.string().min(3, 'El título necesita al menos 3 caracteres'),
//   - price: z.coerce.number({ message: 'Escriba un número' }).positive('El precio debe ser mayor que 0'),
//   - description: z.string().min(10, 'La descripción necesita al menos 10 caracteres'),

interface Props {
  onClose: () => void
}

function ProductForm({ onClose }: Props) {
  const create = useCreateProduct()
  const [fileError, setFileError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  void useForm
  void zodResolver
  void z
  void useEffect

  // TODO 4.1: useForm con zodResolver; register en cada campo; errors bajo cada campo.
  // TODO 4.2 (Archivos): elegirArchivo valida con la File API (solo image/jpeg o image/png y máximo 1 MB),
  //   muestra el mensaje en fileError, y si es válido crea la vista previa con URL.createObjectURL.
  //   Libere la URL anterior con URL.revokeObjectURL (useEffect con limpieza).
  // TODO 4.3 (Crear): al enviar, arme un FormData con los campos (y el archivo con la clave 'image')
  //   y llame a create.mutate(body, { onSuccess: onClose }).
  const elegirArchivo = (file: File | undefined) => {
    void file
    void setFileError
    void setPreview
    void MAX_IMAGE_BYTES
    void IMAGE_TYPES
  }

  const field = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-brand-600'

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="form-title" className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
      <form onSubmit={(e) => e.preventDefault()} className="max-h-full w-full max-w-lg space-y-3 overflow-y-auto rounded-xl bg-white p-5">
        <h2 id="form-title" className="text-lg font-bold">Nuevo producto</h2>

        <div>
          <label htmlFor="title" className="text-sm font-medium">Título</label>
          <input id="title" type="text" className={field} />
          {/* TODO 4.1: registre el campo con register('title') y muestre aquí su mensaje de error */}
        </div>
        <div>
          <label htmlFor="price" className="text-sm font-medium">Precio</label>
          <input id="price" type="number" step="0.01" className={field} />
          {/* TODO 4.1: registre el campo con register('price') y muestre aquí su mensaje de error */}
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium">Descripción</label>
          <textarea id="description" rows={3} className={field} />
          {/* TODO 4.1: registre el campo con register('description') y muestre aquí su mensaje de error */}
        </div>

        <div>
          <label htmlFor="image" className="text-sm font-medium">Imagen (JPG o PNG, máx. 1 MB)</label>
          <input id="image" type="file" accept="image/jpeg,image/png" className="mt-1 block w-full text-sm" onChange={(e) => elegirArchivo(e.target.files?.[0])} />
          {fileError && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{fileError}</AlertDescription>
            </Alert>
          )}
          {preview && <img src={preview} alt="Vista previa de la imagen elegida" className="mt-2 h-24 rounded-lg object-contain" />}
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="outline" onClick={onClose} disabled={create.isPending}>Cancelar</Button>
          <Button type="submit" disabled={create.isPending}>{create.isPending ? 'Guardando…' : 'Guardar'}</Button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
