import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const LayOut: React.FC = () => {
    const [menuStatus, setMenuStatus] = React.useState<boolean>(false)
    const testActive = () => {
        if (menuStatus) {
            return "active"
        } else return ""
    }

    const toggleStatus = () => {
        if (menuStatus) {
            setMenuStatus(false)
        } else setMenuStatus(true)
    }
    return (
        <>

            <div className="inner">
                <div className={`burger ${testActive()}`} onClick={toggleStatus}>
                    <div className="icon"></div>
                </div>
                <div className={`header ${testActive()}`}>
                    <div className="header__logo">
                        <img src={`${window.location.origin}/img/logo.svg`} alt="logo" />
                    </div>
                    <ul className="header__links">
                        <li>
                            <NavLink
                                onClick={() => setMenuStatus(false)}
                                className="header__link-block"
                                to={"/"}
                            >
                                Main
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                onClick={() => setMenuStatus(false)}

                                className="header__link-block"
                                to={"/about"}
                            >
                                About
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                onClick={() => setMenuStatus(false)}

                                className="header__link-block"
                                to={"/skils"}
                            >
                                My Skils
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                onClick={() => setMenuStatus(false)}

                                className="header__link-block"
                                to={"/portfolio"}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                    </ul>
                    <div></div>
                </div>
                <Outlet />
            </div>
        </>
    )
}
export default LayOut