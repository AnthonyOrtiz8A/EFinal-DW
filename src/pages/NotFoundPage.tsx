import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center p-6 text-center">
      <p className="text-6xl font-extrabold text-brand-800">404</p>
      <h1 className="mt-2 text-xl font-bold">Página no encontrada</h1>
      <p className="mt-1 text-sm text-slate-600">La dirección no existe o fue movida.</p>
      <Link to="/productos" className="mt-4 rounded-lg bg-brand-800 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
        Ir al catálogo
      </Link>
    </main>
  )
}

export default NotFoundPage
