"use client"

import { useEffect, useRef } from "react"

interface AnimatedChartProps {
  type: "growth" | "decline" | "comparison"
  className?: string
}

export function AnimatedChart({ type, className = "" }: AnimatedChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 200

    let animationFrame: number
    let progress = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (type === "growth") {
        drawGrowthChart(ctx, progress)
      } else if (type === "decline") {
        drawDeclineChart(ctx, progress)
      } else if (type === "comparison") {
        drawComparisonChart(ctx, progress)
      }

      progress += 0.02
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          progress = 0
          animate()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(canvas)

    return () => {
      observer.disconnect()
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [type])

  const drawGrowthChart = (ctx: CanvasRenderingContext2D, progress: number) => {
    const points = [
      { x: 50, y: 150 },
      { x: 100, y: 140 },
      { x: 150, y: 120 },
      { x: 200, y: 90 },
      { x: 250, y: 70 },
      { x: 300, y: 50 },
      { x: 350, y: 30 },
    ]

    // Draw grid
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const y = 30 + i * 30
      ctx.beginPath()
      ctx.moveTo(50, y)
      ctx.lineTo(350, y)
      ctx.stroke()
    }

    // Draw animated line
    ctx.strokeStyle = "#0f4c3a"
    ctx.lineWidth = 3
    ctx.beginPath()

    const currentPoints = Math.floor(progress * points.length)
    for (let i = 0; i < currentPoints; i++) {
      if (i === 0) {
        ctx.moveTo(points[i].x, points[i].y)
      } else {
        ctx.lineTo(points[i].x, points[i].y)
      }
    }

    if (currentPoints < points.length && progress > 0) {
      const nextPoint = points[currentPoints]
      const prevPoint = points[currentPoints - 1] || points[0]
      const segmentProgress = progress * points.length - currentPoints
      const x = prevPoint.x + (nextPoint.x - prevPoint.x) * segmentProgress
      const y = prevPoint.y + (nextPoint.y - prevPoint.y) * segmentProgress
      ctx.lineTo(x, y)
    }

    ctx.stroke()

    // Draw points
    ctx.fillStyle = "#fba105"
    for (let i = 0; i < currentPoints; i++) {
      ctx.beginPath()
      ctx.arc(points[i].x, points[i].y, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add labels
    ctx.fillStyle = "#1a1a1a"
    ctx.font = "12px sans-serif"
    ctx.fillText("Revenue Growth", 50, 20)
  }

  const drawDeclineChart = (ctx: CanvasRenderingContext2D, progress: number) => {
    const points = [
      { x: 50, y: 50 },
      { x: 100, y: 70 },
      { x: 150, y: 90 },
      { x: 200, y: 110 },
      { x: 250, y: 130 },
      { x: 300, y: 140 },
      { x: 350, y: 150 },
    ]

    // Draw grid
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const y = 30 + i * 30
      ctx.beginPath()
      ctx.moveTo(50, y)
      ctx.lineTo(350, y)
      ctx.stroke()
    }

    // Draw animated line
    ctx.strokeStyle = "#dc2626"
    ctx.lineWidth = 3
    ctx.beginPath()

    const currentPoints = Math.floor(progress * points.length)
    for (let i = 0; i < currentPoints; i++) {
      if (i === 0) {
        ctx.moveTo(points[i].x, points[i].y)
      } else {
        ctx.lineTo(points[i].x, points[i].y)
      }
    }

    if (currentPoints < points.length && progress > 0) {
      const nextPoint = points[currentPoints]
      const prevPoint = points[currentPoints - 1] || points[0]
      const segmentProgress = progress * points.length - currentPoints
      const x = prevPoint.x + (nextPoint.x - prevPoint.x) * segmentProgress
      const y = prevPoint.y + (nextPoint.y - prevPoint.y) * segmentProgress
      ctx.lineTo(x, y)
    }

    ctx.stroke()

    // Draw points
    ctx.fillStyle = "#dc2626"
    for (let i = 0; i < currentPoints; i++) {
      ctx.beginPath()
      ctx.arc(points[i].x, points[i].y, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add labels
    ctx.fillStyle = "#1a1a1a"
    ctx.font = "12px sans-serif"
    ctx.fillText("Traditional Sales", 50, 20)
    ctx.fillText("Declining", 300, 160)
  }

  const drawComparisonChart = (ctx: CanvasRenderingContext2D, progress: number) => {
    const bars = [
      { label: "Before", value: 100, color: "#6b7280" },
      { label: "After", value: 300, color: "#fba105" },
    ]

    const maxValue = Math.max(...bars.map((b) => b.value))
    const barWidth = 80
    const spacing = 100

    bars.forEach((bar, index) => {
      const x = 100 + index * (barWidth + spacing)
      const height = (bar.value / maxValue) * 120 * progress
      const y = 150 - height

      // Draw bar
      ctx.fillStyle = bar.color
      ctx.fillRect(x, y, barWidth, height)

      // Draw label
      ctx.fillStyle = "#1a1a1a"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(bar.label, x + barWidth / 2, 170)

      // Draw value
      if (progress > 0.8) {
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px sans-serif"
        ctx.fillText(`${Math.round(bar.value * progress)}%`, x + barWidth / 2, y + height / 2)
      }
    })

    ctx.textAlign = "left"
  }

  return (
    <canvas ref={canvasRef} className={`max-w-full h-auto ${className}`} style={{ width: "100%", height: "auto" }} />
  )
}
