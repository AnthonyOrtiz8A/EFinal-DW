import type { Product } from '../types'

// Arma el texto de la ficha de un producto. Ya viene hecha: usted solo crea el Blob y lo descarga.
export function fichaText(item: Product): string {
  return [
    item.title,
    `Categoría: ${item.category}`,
    `Precio: $${item.price.toFixed(2)}`,
    `Stock: ${item.stock} · Valoración: ${item.rating}`,
    '',
    item.description,
  ].join('\n')
}
