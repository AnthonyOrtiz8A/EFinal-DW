import { Outlet } from 'react-router-dom'

// TODO 1.4 (Autenticación): si NO hay accessToken en el store, redirija a /login con <Navigate>.
// Si hay sesión, muestre las rutas hijas con <Outlet />.
function ProtectedRoute() {
  return <Outlet />
}

export default ProtectedRoute
