import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <p className="mt-4 text-lg font-medium text-muted-foreground">Carregando...</p>
    </div>
  )
}

export { Loading };