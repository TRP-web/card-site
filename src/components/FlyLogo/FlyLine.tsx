import React from 'react'
import useGetRandom from '../../hooks/useGetRandom';

interface IParamLine {
    width: number
    leftSpeed: number
    topSpeed: number
    rotateSpeed: number
}

interface IProgres {
    left: number
    top: number
    rotate: number;
}

const FlyLine: React.FC = () => {
    const getRandom = useGetRandom

    const getParamObject = () => {
        return {
            width: getRandom(30, 200),
            rotateSpeed: getRandom(-300, 300),
            leftSpeed: getRandom(35, 200),
            topSpeed: getRandom(-200, 200),
        }
    }

    const getProgresObject = () => {
        return {
            left: -550,
            top: getRandom(100, window.innerHeight - 100),
            rotate: 0,
        }
    }
    const [paramLine, setParamLine] = React.useState<IParamLine>(getParamObject())
    const [progres, setProgres] = React.useState<IProgres>(
        getProgresObject()
        // start value
    )

    if (progres.left > window.innerWidth + 50 || progres.top > window.innerHeight + 150 || progres.top < - 300) {
        setParamLine(getParamObject())
        setProgres(getProgresObject())
        //restart logo
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setProgres({
                left: progres.left + paramLine.leftSpeed / 50,
                top: progres.top + paramLine.topSpeed / 50,
                rotate: progres.rotate + paramLine.rotateSpeed / 50
            })
        }, 20)
        return () => clearTimeout(timeout)
        // progres go
    }, [progres])

    return (
        <>
            {
                progres.left > -170 ?
                    <div className='fly__line' style={{
                        width: `${paramLine.width}px`,
                        transform: `rotate(${progres.rotate}deg)`,
                        top: `${progres.top}px`,
                        left: `${progres.left}px`
                    }}
                    >
                        <img src={`${window.location.origin}/img/logo-fly.svg`} alt="logo" />
                    </div>
                    : null
            }
        </>


    )
}
export default FlyLine