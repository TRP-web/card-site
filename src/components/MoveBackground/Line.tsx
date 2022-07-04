import React from 'react'
import useGetArray from '../../hooks/useGetArray'

interface ILineProps {
    children: string
}

const Line: React.FC<ILineProps> = ({ children }) => {
    const childrenArray = useGetArray(children, 50)

    const hoverOnHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.classList.add("active")
    }

    const hoverOutHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.classList.remove("active")
    }

    return (
        <div className='background__line'>
            {childrenArray.map((children, index) => {
                return (
                    <span
                        key={index}
                        onMouseOver={(e) => hoverOnHandler(e)}
                        onMouseOut={(e) => hoverOutHandler(e)}
                    >{children}</span>
                )
            })}
        </div>
    )
}
export default Line