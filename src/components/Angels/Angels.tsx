import React from 'react'

interface IAngelesProps {
    width: number
    right?: number
    bottom?: number
    left?: number
    top?: number
}

const Angels: React.FC<IAngelesProps> = ({ width, left = -10, top = -10, right = -10, bottom = -10 }) => {
    return (
        <>
            <img
                src={`${window.location.origin}/img/angel.svg`}
                alt="angel"
                className='angel-left'
                style={{
                    width: `${width}px`,
                    top: `${top}px`,
                    left: `${left}px`,
                }}
            />
            <img
                src={`${window.location.origin}/img/angel.svg`}
                alt="angel"
                className='angel-right'
                style={{
                    width: `${width}px`,
                    bottom: `${bottom}px`,
                    right: `${right}px`,
                }}
            />
        </>
    )
}
export default Angels