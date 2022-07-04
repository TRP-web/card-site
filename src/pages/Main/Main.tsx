import React from 'react'
import { Link } from 'react-router-dom';
import Angels from '../../components/Angels/Angels';
import DotsAndLines from '../../components/DotsAndLines/DotsAndLines';

interface IMainProps {
}

const Main: React.FC<IMainProps> = () => {
    return (
        <>
            <section className='pages'>

                <div className="animation">
                    <span className="main__beck-text" id='beck-text-1'>Web</span>
                    <span className="main__beck-text" id='beck-text-2'>developer</span>
                    <DotsAndLines />
                    <div className="main">
                        <h1 className='main__title'>
                            Hello, I’m Bogdan,<br />web developer
                        </h1>

                        <Link to={"/about"} className="main__button">
                            <div></div>
                            <span>next</span>
                            <img className='arrow' src={`${window.location.origin}/img/arrow.svg`} alt="" />
                            <Angels
                                width={25}
                                top={-15}
                                left={-15}
                                bottom={-15}
                                right={-15}
                            />

                        </Link>
                    </div>
                </div>



            </section>
        </>



    )
}
export default Main