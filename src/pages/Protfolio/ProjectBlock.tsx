import React from 'react'

interface IProjectBlockProps {
    images: string
    children: string
}

const ProjectBlock: React.FC<IProjectBlockProps> = ({ images, children }) => {

    return (
        <>
            <div className="portfolio-block" >
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

            </div>
        </>
    )
}
export default ProjectBlock