import React from 'react'
import Angels from '../../components/Angels/Angels'
import FlyLogo from '../../components/FlyLogo/FlyLogo'
import RadarChartCustum from './RadarChart'

import "./Skills.scss"
import TeamBlock from './TeamBlock'

const Skills: React.FC = () => {

    return (
        <section className='pages'>
            <FlyLogo />
            <div className="container" style={{ position: "relative", zIndex: "10" }}>
                <div className="skills">
                    <h1 className="skills__title">Skills</h1>
                    <div className="skills__inner">
                        <div className="skills__team">
                            {/* <Angels width={35} left={-25} top={-25}/> */}
                            <TeamBlock>
                                Communicate
                            </TeamBlock>
                            <TeamBlock>
                                Perseverance
                            </TeamBlock>
                            <TeamBlock>
                                Speed Learn
                            </TeamBlock>
                        </div>
                        <div className="skills__chart">
                            <RadarChartCustum />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills