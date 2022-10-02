import React from 'react'
import useGetArray from '../../hooks/useGetArray'
import Line from './Line'

const MoveBackGround: React.FC = () => {

    return (
        <>
            {/* {
                lineArray.map((text, index) => {
                    return (
                        <Line key={index}>
                            {text}
                        </Line>
                    )
                })
            } */}
            <Line>
                Live
            </Line>
            <Line>
                Web developer
            </Line>
            <Line>
                Ukraine
            </Line>
            <Line>
                ReactJS
            </Line>
            <Line>
                NEXT
            </Line>
            <Line>
                Front-end
            </Line>
            <Line>
                Live
            </Line>
            <Line>
                Web developer
            </Line>
            <Line>
                Ukraine
            </Line>
            <Line>
                Live
            </Line>
            <Line>
                Web developer
            </Line>
            <Line>
                Job
            </Line>
            <Line>
                Live
            </Line>
            <Line>
                Portfolio
            </Line>
            <Line>
                Ukraine
            </Line>
            {
                window.screen.width > 1599 ?
                    <>
                        <Line>
                            Live
                        </Line>
                        <Line>
                            Web developer
                        </Line>
                        <Line>
                            Ukraine
                        </Line>
                        <Line>
                            Live
                        </Line>
                        <Line>
                            Web developer
                        </Line>
                        <Line>
                            Ukraine
                        </Line>
                        <Line>
                            Live
                        </Line>
                        <Line>
                            Web developer
                        </Line>
                        <Line>
                            Ukraine
                        </Line>
                        <Line>
                            Live
                        </Line>
                        <Line>
                            Web developer
                        </Line>
                        <Line>
                            Ukraine
                        </Line>
                        <Line>
                            Live
                        </Line>
                        <Line>
                            Web developer
                        </Line>
                        <Line>
                            Ukraine
                        </Line>
                    </>

                    : null
            }
        </>

    )
}
export default MoveBackGround