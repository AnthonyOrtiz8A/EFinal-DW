import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

// TODO 1.1 (Autenticación): conecte este formulario.
//  - React Hook Form + Zod: ambos campos obligatorios (useForm con zodResolver), mensaje bajo cada campo.
//  - Al enviar: authService.login, guardar la sesión con setSession y navegar a /productos.
//  - Si falla (por ejemplo 400 con credenciales incorrectas), mostrar el mensaje con getErrorMessage
//    dentro del <Alert> de abajo. Mientras se envía, el botón debe quedar deshabilitado.
//  - Si ya hay sesión (accessToken), redirigir a /productos con <Navigate>.
function LoginPage() {
  const field =
    'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-brand-600'
  const serverError: string | null = null

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center p-6">
      <h1 className="text-2xl font-bold text-slate-900">Iniciar sesión</h1>
      <form className="mt-4 space-y-3" noValidate>
        <div>
          <label htmlFor="username" className="text-sm font-medium">Usuario</label>
          <input id="username" autoComplete="username" className={field} />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
          <input id="password" type="password" autoComplete="current-password" className={field} />
        </div>
        {serverError && (
          <Alert variant="destructive">
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}
        <Button type="submit" className="w-full">Ingresar</Button>
      </form>
    </main>
  )
}

export default LoginPage
