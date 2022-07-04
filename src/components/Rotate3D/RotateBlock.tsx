import React from 'react'

interface IRotateBlockProps {
    // children: JSX.Element[]
    children: string
    color: string
    imgName: string
}

const RotateBlock: React.FC<IRotateBlockProps> = ({children, color, imgName}) => {

    return (
        
        <div className="circle__block" style={{color: color}}>
            <img className='circle__icon' src={`${window.location.origin}/img/logos/${imgName}`} alt="logo" />
            <div>{children}</div>
        </div>
    )
}
export default RotateBlock