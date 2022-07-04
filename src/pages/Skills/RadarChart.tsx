import React from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, } from 'recharts'
import { data } from '../../vars/skillsVars'
const RadarChartCustum: React.FC = () => {
    const [polarAngle, setPolarAngle] = React.useState<number>(0)

    setTimeout(() => {
        setPolarAngle(polarAngle + 1)
    }, 20)

    const tickFormater = (value: string) => {
        const result = `${value}%`
        return result
    }

    const adaptRadar = (width: number) => {
        if (width > 851) {
            return {
                main: {
                    cx: 260,
                    cy: 230,
                    outerRadius: 150,
                    width: 500,
                    height: 430,
                    data: data
                },
                skilsFont: "32px",
                radiusFont: "25px"
            }
        } else {
            return {
                main: {
                    cx: 183,
                    cy: 130,
                    outerRadius: 100,
                    width: 350,
                    height: 260,
                    data: data
                },
                skilsFont: "23px",
                radiusFont: "20px"
            }
        }
    }
    const adaptRadarResult = adaptRadar(window.innerWidth)
    return (
        <>
            <RadarChart {...adaptRadarResult.main}
            >
                <PolarGrid />
                <PolarAngleAxis
                    fontSize={adaptRadarResult.skilsFont}
                    fontFamily="Bebas Neue"
                    stroke='#00DC53'
                    dataKey="skill"
                />

                <Radar
                    dot
                    name="Mike"
                    dataKey="levl"
                    stroke="#00DC53"
                    fill="#00DC53"
                    fillRule='evenodd'
                    fillOpacity={0.6}
                />
                <PolarRadiusAxis
                    tickFormatter={tickFormater}
                    stroke='#fff'
                    fontSize={adaptRadarResult.radiusFont}
                    fontFamily="Bebas Neue"
                    angle={polarAngle}
                    domain={[0, 100]}
                    tickCount={6}
                />
            </RadarChart>
        </>
    )
}
export default RadarChartCustum