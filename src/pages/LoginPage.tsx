import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { authService } from '../services/authService'
import { useAuthStore } from '../store/authStore'
import { getErrorMessage } from '../utils/errorHandler'

const loginSchema = z.object({
  username: z.string().min(1, 'El usuario es obligatorio'),
  password: z.string().min(1, 'La contraseña es obligatoria'),
})

type LoginForm = z.infer<typeof loginSchema>

function LoginPage() {
  const navigate = useNavigate()
  const accessToken = useAuthStore((state) => state.accessToken)
  const setSession = useAuthStore((state) => state.setSession)
  const [serverError, setServerError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' },
  })

  if (accessToken) return <Navigate to="/productos" replace />

  const submit = async ({ username, password }: LoginForm) => {
    setServerError(null)
    try {
      const session = await authService.login(username, password)
      setSession(session)
      navigate('/productos', { replace: true })
    } catch (error) {
      setServerError(getErrorMessage(error))
    }
  }

  const field =
    'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-brand-600'

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center p-6">
      <h1 className="text-2xl font-bold text-slate-900">Iniciar sesión</h1>
      <form className="mt-4 space-y-3" noValidate onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="username" className="text-sm font-medium">Usuario</label>
          <input id="username" autoComplete="username" className={field} aria-invalid={Boolean(errors.username)} {...register('username')} />
          {errors.username && <p className="mt-1 text-sm text-red-700" role="alert">{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
          <input id="password" type="password" autoComplete="current-password" className={field} aria-invalid={Boolean(errors.password)} {...register('password')} />
          {errors.password && <p className="mt-1 text-sm text-red-700" role="alert">{errors.password.message}</p>}
        </div>
        {serverError && (
          <Alert variant="destructive">
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Ingresando…' : 'Ingresar'}
        </Button>
      </form>
    </main>
  )
}

export default LoginPage
