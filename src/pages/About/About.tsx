import React from 'react'
import Angels from '../../components/Angels/Angels'

import MoveBackGround from '../../components/MoveBackground/MoveBeckground'

import "./About.scss"

const About: React.FC = () => {
    const Rotate3D = React.lazy(() => import('../../components/Rotate3D/Rotate3D'))
    return (
        <section className="pages">
            <div className="about">
                <div className="background">
                    <MoveBackGround />
                </div>
                <div className="about__inner">
                    <div className="about__text">
                        <div className="about__text-inner">
                            <Angels
                                width={45}
                                top={-45}
                                left={-45}
                                bottom={-45}
                                right={-45}
                            />

                            <h1 className="about__title">About myself</h1>
                            <p className="about__paragraf">
                                I'm Web Developer from Ukraine. I Very like create different web sites, long time
                                was engaged Front-end develepment but last three month learn Beck-end tehnologis.
                                <br />
                                <br />
                                I have low of experience in commercial develepment, 20 projects on the exchange and 3 mounts edit and create different easy web site
                            </p>
                        </div>
                        <React.Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
                            <Rotate3D />
                        </React.Suspense>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About