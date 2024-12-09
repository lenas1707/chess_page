'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    MathJax: any;
  }
}

export function MathComponent({ equation }: { equation: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.MathJax && ref.current) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, ref.current])
    }
  }, [equation])

  return (
    <span ref={ref} className="inline-block my-2 text-xl">
      $$
      {equation}
      $$
    </span>
  )
}

