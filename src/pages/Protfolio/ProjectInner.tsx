import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Angels from '../../components/Angels/Angels'
import { games, other, someWorks } from '../../vars/skillsVars'
import { ITypeMenu } from './Menu'
import ProjectBlock from './ProjectBlock'

interface IProjectInnerProps {
    type: ITypeMenu
}

const ProjectInner: React.FC<IProjectInnerProps> = ({ type }) => {

    const getConst = (type: ITypeMenu) => {
        if (type === "some works") {
            return someWorks
        } else if (type === "games") {
            return games
        } else if (type === "other") {
            return other
        }
    }

    return (
        <div style={{position: "relative"}}>
            <div className={"portfolio__inner"}>

                {
                    getConst(type)?.map((work, index) => {
                        return (
                            // <CSSTransition
                            //     key={Math.random()}
                            //     classNames={"portfolio-block"}
                            //     timeout={0}
                            // >
                            <ProjectBlock images={work.images}>
                                {work.text}
                            </ProjectBlock>
                            // </CSSTransition>

                        )
                    })
                }
            </div>
        </div>

    )
}
export default ProjectInner