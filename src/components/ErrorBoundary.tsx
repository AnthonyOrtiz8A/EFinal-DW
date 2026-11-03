import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error de render:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <main className="mx-auto max-w-md p-6 text-center">
        <h1 className="text-xl font-bold">Algo salió mal</h1>
        <p className="mt-2 text-sm text-slate-600">La pantalla tuvo un error inesperado.</p>
        <Button className="mt-4" onClick={() => window.location.reload()}>
          Recargar
        </Button>
      </main>
    )
  }
}

export default ErrorBoundary
