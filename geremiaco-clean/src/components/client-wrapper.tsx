'use client'

import { ReactNode, Suspense } from 'react'

interface ClientWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ClientWrapper({ children, fallback }: ClientWrapperProps) {
  return (
    <Suspense fallback={fallback || <div className="min-h-[20px]"></div>}>
      {children}
    </Suspense>
  )
}
