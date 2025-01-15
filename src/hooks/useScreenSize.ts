'use client'

import { useState, useEffect } from 'react'

export const useScreenSizeCheck = (threshold: number = 1024) => {
  const [isBelowThreshold, setIsBelowThreshold] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsBelowThreshold(window.innerWidth < threshold)
    checkSize()
    window.addEventListener('resize', checkSize)

    return () => window.removeEventListener('resize', checkSize)
  }, [threshold])

  return isBelowThreshold
}
