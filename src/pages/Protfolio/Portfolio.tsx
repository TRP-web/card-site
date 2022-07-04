import React from 'react'
import AnimationTitle from '../../components/AnimationTitle/AnimaitonTitle'
import Menu from './Menu'
import "./Portfolio.scss"

const Portfolio: React.FC = () => {

    return (
        <section className='pages'>
            <img
                className='square'
                src={`${window.location.origin}/img/square.svg`}
                id="square-1" alt=""
            />
            <div className="portfolio">

                <div className="portfolio__title-inner">
                    <AnimationTitle>
                        My Projects
                    </AnimationTitle>
                </div>
                <Menu />

            </div>
        </section>
    )
}
export default Portfolio