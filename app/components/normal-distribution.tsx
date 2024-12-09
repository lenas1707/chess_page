'use client'

import { useEffect, useRef } from 'react'

export function NormalDistribution() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = { top: 20, right: 20, bottom: 40, left: 60 }

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw normal distribution
    ctx.beginPath()
    ctx.moveTo(padding.left, height - padding.bottom)

    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    for (let x = 0; x <= chartWidth; x++) {
      const normalX = x / chartWidth * 80
      const y = height - padding.bottom - normalDist(normalX, 40, 10) * chartHeight * 2.5
      ctx.lineTo(x + padding.left, y)
    }

    ctx.lineTo(width - padding.right, height - padding.bottom)
    ctx.closePath()

    // Fill the curve
    ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'
    ctx.fill()

    // Draw the outline
    ctx.strokeStyle = 'rgb(29, 78, 216)'
    ctx.stroke()

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding.left, height - padding.bottom)
    ctx.lineTo(width - padding.right, height - padding.bottom)
    ctx.moveTo(padding.left, height - padding.bottom)
    ctx.lineTo(padding.left, padding.top)
    ctx.strokeStyle = 'black'
    ctx.stroke()

    // Label axes
    ctx.fillStyle = 'black'
    ctx.font = '12px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Número de movimentos', width / 2, height - 10)

    // Y-axis label
    ctx.save()
    ctx.translate(15, height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = 'center'
    ctx.fillText('Frequência', 0, 0)
    ctx.restore()

    // Draw tick marks for x-axis (number of moves)
    for (let i = 0; i <= 80; i += 20) {
      const x = padding.left + (i / 80) * chartWidth
      ctx.beginPath()
      ctx.moveTo(x, height - padding.bottom)
      ctx.lineTo(x, height - padding.bottom + 5)
      ctx.stroke()
      ctx.fillText(i.toString(), x, height - padding.bottom + 20)
    }

    // Draw frequency labels on y-axis
    const maxFreq = normalDist(40, 40, 10)
    ctx.textAlign = 'right'
    for (let i = 0; i <= 5; i++) {
      const freq = (maxFreq * i / 5).toFixed(3)
      const y = height - padding.bottom - (i / 5) * chartHeight
      ctx.fillStyle = 'black'
      ctx.fillText(freq, padding.left - 5, y + 4)
    }

  }, [])

  // Normal distribution function
  function normalDist(x: number, mean: number, stdDev: number) {
    return Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) / (stdDev * Math.sqrt(2 * Math.PI))
  }

  return (
    <canvas 
      ref={canvasRef} 
      width={600} 
      height={320} 
      className="mx-auto"
      aria-label="Distribuição Normal da duração dos jogos de xadrez"
      role="img"
    />
  )
}

