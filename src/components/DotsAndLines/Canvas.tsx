import React from 'react'
import { ICircles } from '../../types/differentTypes'

interface ICavasProp {
    circle: ICircles
    next: ICircles | undefined
    circles: ICircles[]
    setCircles: (circles: ICircles[]) => void
}

const Canvas: React.FC<ICavasProp> = ({ circle, next, circles, setCircles }) => {

    const getPxFromInterest = (interest: number): { top: number, left: number } => {
        const top = window.innerHeight / 100 * interest
        const left = (window.innerWidth - 152) / 100 * interest
        return { top: top, left: left }
    }

    const goToX = (needX: number, id: number) => {
        const newArray = circles.map((circle) => {
            if (circle.id === id) {
                if (circle.left !== needX) {
                    if (circle.left > needX) {
                        circle.left -= 0.15
                        if (circle.left > needX) {
                            setTimeout(() => {
                                goToX(needX, id)
                            }, 15)
                        }
                    } else if (circle.left < needX) {
                        circle.left += 0.15
                        if (circle.left < needX) {
                            setTimeout(() => {
                                goToX(needX, id)
                            }, 15)
                        }
                    }
                }
                return circle
            } else return circle
        })
        setCircles(newArray)
    }

    const goToY = (needY: number, id: number) => {
        const newArray = circles.map((circle) => {
            if (circle.id === id) {
                if (circle.top !== needY) {
                    if (circle.top > needY) {
                        circle.top -= 0.2
                        if (circle.top > needY) {
                            setTimeout(() => {
                                goToY(needY, id)
                            }, 15)
                        }
                    } else if (circle.top < needY) {
                        circle.top += 0.2
                        if (circle.top < needY) {
                            setTimeout(() => {
                                goToY(needY, id)
                            }, 15)
                        }
                    }
                }
                return circle
            } else return circle
        })
        setCircles(newArray)
    }

    const getNeedRandom = (old: number): number => {
        let compas
        if (Math.round(Math.random() * 2) === 1) {
            compas = -1
        } else {
            compas = 1
        }
        const result = old + Math.round(Math.random() * 20) * compas
        return result
    }

    const clickCircleHandler = (id: number) => {
        let circle: ICircles
        circles.forEach((elem) => {
            if (elem.id === id) {
                circle = elem
                const needY = getNeedRandom(circle.top)
                const needX = getNeedRandom(circle.left)
                goToY(needY, id)
                goToX(needX, id)
            }
        })
    }

    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => {
        const c = canvasRef.current
        if (c !== null) {
            const ctx = c.getContext("2d")
            ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx?.beginPath()

            if (ctx !== null) {
                const leftPx = getPxFromInterest(circle.left).left
                const topPx = getPxFromInterest(circle.top).top
                ctx.moveTo(leftPx + 6, topPx + 6);
                ctx.lineWidth = 2

                if (next !== undefined) {
                    const leftPxNext = getPxFromInterest(next.left).left
                    const topPxNext = getPxFromInterest(next.top).top
                    ctx.lineTo(leftPxNext + 6, topPxNext + 6); // x y
                }
                ctx.strokeStyle = "#3C3C3C"
                ctx.stroke();
            }
        }

    }, [circles])

    return (
        <>
            <canvas
                className='canvas'
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{
                    position: "absolute",
                }}></canvas>
            <div
                className="animation__circle"
                onMouseOver={() => clickCircleHandler(circle.id)}
                style={{
                    left: `${circle.left}%`,
                    top: `${circle.top}%`
                }}
            >
            </div>
        </>
    )
}
export default Canvas