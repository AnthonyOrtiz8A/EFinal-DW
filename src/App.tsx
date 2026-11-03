import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'

// TODO 1.4 (Autenticación): las rutas /productos y /productos/:id deben quedar dentro de
// <Route element={<ProtectedRoute />}>.
// TODO 5.3 (Errores): agregue la ruta comodín path="*" que muestre NotFoundPage.
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/productos/:id" element={<ProductDetailPage />} />
      <Route path="/" element={<Navigate to="/productos" replace />} />
    </Routes>
  )
}

export default App
