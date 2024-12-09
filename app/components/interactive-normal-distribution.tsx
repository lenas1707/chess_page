'use client'

import { useState, useEffect, useRef } from 'react'

function normalDist(x: number, mean: number, stdDev: number) {
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
}

export function InteractiveNormalDistribution() {
  const [mean, setMean] = useState(40)
  const [stdDev, setStdDev] = useState(10)
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
      const normalX = (x / chartWidth) * 80
      const y = height - padding.bottom - normalDist(normalX, mean, stdDev) * chartHeight * 2.5
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
    const maxFreq = normalDist(mean, mean, stdDev)
    ctx.textAlign = 'right'
    for (let i = 0; i <= 5; i++) {
      const freq = (maxFreq * i / 5).toFixed(3)
      const y = height - padding.bottom - (i / 5) * chartHeight
      ctx.fillStyle = 'black'
      ctx.fillText(freq, padding.left - 5, y + 4)
    }

  }, [mean, stdDev])

  return (
    <div className="space-y-4">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={320} 
        className="mx-auto"
        aria-label="Distribuição Normal interativa da duração dos jogos de xadrez"
        role="img"
      />
      <div className="flex justify-center space-x-4">
        <div>
          <label htmlFor="mean" className="block text-sm font-medium text-gray-700">Média:</label>
          <input
            type="range"
            id="mean"
            min="20"
            max="60"
            value={mean}
            onChange={(e) => setMean(Number(e.target.value))}
            className="mt-1 block w-full"
          />
          <span className="text-sm text-gray-500">{mean} movimentos</span>
        </div>
        <div>
          <label htmlFor="stdDev" className="block text-sm font-medium text-gray-700">Desvio Padrão:</label>
          <input
            type="range"
            id="stdDev"
            min="1"
            max="20"
            value={stdDev}
            onChange={(e) => setStdDev(Number(e.target.value))}
            className="mt-1 block w-full"
          />
          <span className="text-sm text-gray-500">{stdDev} movimentos</span>
        </div>
      </div>
    </div>
  )
}

