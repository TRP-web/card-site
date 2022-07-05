import React from 'react'

interface IProjectBlockProps {
    images: string
    children: string
    link: string
}

const ProjectBlock: React.FC<IProjectBlockProps> = ({ images, children, link }) => {

    return (
        <>
            <div className="portfolio-block">
                <a href={link}>
                    <div className="portfolio-block__inner">
                        <div className="portfolio-block__face" style={{
                            backgroundImage: `url(${window.location.origin}/img/portfolio/${images})`
                        }}>
                        </div>
                        <div className="portfolio-block__side" style={{
                            backgroundImage: `url(${window.location.origin}/img/portfolio/${images})`
                        }}>
                            <div className="portfolio-block__info">
                                <p>{children}</p>
                                <button>see now</button>
                            </div>

                        </div>
                    </div>
                </a>

            </div>
        </>
    )
}
export default ProjectBlock