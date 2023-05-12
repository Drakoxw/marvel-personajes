import { ReactNode, useEffect, useState } from 'react'

export interface IChildren {
  children?: ReactNode
}

export default function LayoutHydrated({ children }: IChildren) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? children : ''}</>
}
