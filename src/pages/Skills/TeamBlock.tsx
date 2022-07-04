import React from 'react'

interface ITeamBlockProps {
    children: string
}

const TeamBlock: React.FC<ITeamBlockProps> = ({children}) => {

    return (
        <div className="skills__team-inner">
            <img src={`${window.location.origin}/img/list-item.png`} alt="" />
            <p>{children}</p>
        </div>
    )
}
export default TeamBlock