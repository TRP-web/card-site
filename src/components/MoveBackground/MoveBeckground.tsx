import React from 'react'
import useGetArray from '../../hooks/useGetArray'
import Line from './Line'

const MoveBackGround: React.FC = () => {

    const lineArray = useGetArray(
        "React"
        , 20)

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

    )
}
export default MoveBackGround