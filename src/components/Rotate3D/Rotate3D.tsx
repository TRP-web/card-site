import React from 'react'
import Angels from '../Angels/Angels'
import RotateBlock from './RotateBlock'
import "./style.scss"

const Rotate3D: React.FC = () => {
    return (
        <div className="circle__inner">
            <div className="circle">
                <div className="item" id="item-1" >
                    <RotateBlock
                        color='#0170BA'
                        imgName='css-icon-min.jpg'
                    >
                        CSS
                    </RotateBlock>
                </div>
                <div className="item" id="item-2" >
                    <RotateBlock
                        color='#D4B830'
                        imgName='js-icon-min.png'
                    >
                        JavaScript
                    </RotateBlock>
                </div>
                <div className="item" id="item-3" >
                    <RotateBlock
                        color='#D63AFF'
                        imgName='jwt-icon.png'
                    >
                        JWT
                    </RotateBlock>
                </div>
                <div className="item" id="item-4" >
                    <RotateBlock
                        color='#CD6799'
                        imgName='sass-icon-min.png'
                    >
                        SASS
                    </RotateBlock>

                </div>
                <div className="item" id="item-5" >
                    <RotateBlock
                        color='#E44D26'
                        imgName='html-icon-min.png'
                    >
                        HTML 5
                    </RotateBlock>

                </div>
                <div className="item" id="item-6" >
                    <RotateBlock
                        color='#3178C6'
                        imgName='ts-icon-min.png'
                    >
                        TypeScript
                    </RotateBlock>

                </div>
                <div className="item" id="item-7" >
                    <RotateBlock
                        color='#F7962C'
                        imgName='bem-icon-min.png'
                    >
                        BEM
                    </RotateBlock>

                </div>
                <div className="item" id="item-8" >
                    <RotateBlock
                        color='#F2501D'
                        imgName='git-icon-min.png'
                    >
                        GIT
                    </RotateBlock>

                </div>
                <div className="item" id="item-9" >
                    <RotateBlock
                        color='#59A846'
                        imgName='node-icon-min.png'
                    >
                        Node JS
                    </RotateBlock>

                </div>
                <div className="item" id="item-10">
                    <RotateBlock
                        color='#4F9646'
                        imgName='mongo-icon-min.png'
                    >
                        MongoDB
                    </RotateBlock>

                </div>
                <div className="item" id="item-11" >
                    <RotateBlock
                        color='#D4B830'
                        imgName='express-icon-min.png'
                    >
                        Express
                    </RotateBlock>

                </div>
                <div className="item" id="item-12" >
                    <RotateBlock
                        color='#61DAFB'
                        imgName='react-icon-min.png'
                    >
                        React JS
                    </RotateBlock>
                </div>
            </div>
        </div >
    )
}

export default Rotate3D