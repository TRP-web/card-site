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
                                Hello, I Front-end developer from Ukraine. Full last 3 years I have been living web-development and creating a web sites. I like intresting projects and  team development with other people, it is capturing.
                                <br />
                                <br />
                                I have 1 year experience of  Front-end development and creating different web pages. I sure of my skills development, and ready show you this.
                                <br />

                                My <strong>GitHub</strong> - <a style={{ color: "#fff" }} href='https://github.com/TRP-web'>https://github.com/TRP-web</a>
                                <br />
                                My <strong>Email</strong> - kusokpocki@gmail.com
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