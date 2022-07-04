import React from 'react'
import useGetRandom from '../../hooks/useGetRandom'
import "./style.scss"

interface IAnimationTitleProps {
    children: string
}

const AnimationTitle: React.FC<IAnimationTitleProps> = ({ children }) => {
    const [animationStatus, setAnimationStatus] = React.useState<boolean>(false)
    
    const getRandom = useGetRandom

    const latterArray = children.split("")

    const hoverHandler = () => {
        if (!animationStatus) {
            setAnimationStatus(true)
            setTimeout(() => {
                setAnimationStatus(false)
            }, 1000)
        } else {
            return
        }
    }

    const getCalass = (status: boolean): string => {
        const calssArray = ['tada', "bounce", "rubberBand"]
        if (status) {
            return calssArray[getRandom(0, 2)]
            // return "tada"
        } else {
            return ''
        }
    }

    return (
        <>
            <h1 className='portfolio__title' onMouseEnter={hoverHandler}>
                {
                    latterArray.map((latter, index) => {
                        return (
                            <span
                                key={index}
                                className={getCalass(animationStatus)}
                                style={{
                                    display: latter === " " ? "inline" : "inline-block"
                                }}
                            >
                                {latter}
                            </span>
                        )
                    })
                }
            </h1>
        </>
    )
}

export default AnimationTitle