import React from 'react'
import { ICircles } from '../../types/differentTypes'
import Canvas from './Canvas'
import './style.scss'

const DotsAndLines: React.FC = () => {
    const [circles, setCircles] = React.useState<ICircles[]>([])

    const getRandom = (min: number, max: number): number => {
        const random: number = Math.round(Math.random() * (max - min) + min)
        return random
    }

    const createAnimation = (all: number): ICircles[] => {
        const number = 100 / all
        const newCircles: ICircles[] = []
        for (let index = 0; index < all; index++) {
            newCircles.push({
                id: Math.random(),
                left: getRandom(1, 45) + index / 2 * number,
                top: getRandom(1, 45) + index / 2 * number,
            })
        }
        return newCircles
    }

    React.useEffect(() => {
        setCircles(createAnimation(10))
    }, [])



    return (
        <>
                {
                    circles.map((circle, index, array) => {
                        return (
                            <Canvas
                                key={index}
                                circle={circle}
                                next={array[index + 1]}
                                circles={circles}
                                setCircles={setCircles}
                            />
                        )

                    })
                }


        </>
    )
}
export default DotsAndLines