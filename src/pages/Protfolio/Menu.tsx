import React from 'react'
import Angels from '../../components/Angels/Angels'
import ProjectInner from './ProjectInner'
export type ITypeMenu = "some works" | "games" | "other"

const Menu: React.FC = () => {

    const [type, setType] = React.useState<ITypeMenu>("some works")

    interface ILineParams {
        width: number
        top: number
        left: number
    }

    const [lineParams, setLineParams] = React.useState<ILineParams>({ width: 0, left: 89, top: 25 })

    const firstItem = React.useRef<HTMLLIElement>(null)

    const getLineParam = (child: HTMLElement): ILineParams => {
        if (child.parentElement?.getBoundingClientRect().left !== undefined) {
            const result = {
                left: child.getBoundingClientRect().left - child.parentElement?.getBoundingClientRect().left,
                top: child.getBoundingClientRect().height + 2,
                width: child.getBoundingClientRect().width
            }
            return result
        } else return { left: 1, top: 15, width: 90 }
    }

    React.useEffect(() => {
        const width = firstItem.current?.getBoundingClientRect().width
        const left = firstItem.current?.getBoundingClientRect().left
        const top = firstItem.current?.getBoundingClientRect().height
        // test for undefined

        if (width !== undefined && left !== undefined && top !== undefined && firstItem.current !== null) {
            const leftAndTop = getLineParam(firstItem.current)
            const result: ILineParams = {
                width: width,
                left: leftAndTop.left,
                top: leftAndTop.top
            }
            setLineParams(result)
        }
    }, [])

    const chengeMenuHandler = (e: React.MouseEvent<HTMLLIElement>, type: ITypeMenu) => {
        const target = e.currentTarget
        const result = getLineParam(target)
        setLineParams(result)
        setType(type)
    }
    console.log(type)
    return (
        <>
            <nav className='menu'>
                <ul className="menu__list">
                    <Angels width={10} left={-9} top={-6} bottom={-7}/>

                    <li className="munu__type" ref={firstItem} onClick={(e) => chengeMenuHandler(e, "some works")}>
                        Some Works
                    </li>
                    <li className="munu__type" onClick={(e) => chengeMenuHandler(e, "games")}>
                        Games
                    </li>
                    <li className="munu__type" onClick={(e) => chengeMenuHandler(e, "other")}>
                        Other
                    </li>
                    <div className="menu__line" style={{
                        left: `${lineParams.left}px`,
                        width: `${lineParams.width}px`,
                        top: `${lineParams.top}px`
                    }}></div>
                </ul>
            </nav>
            <ProjectInner type={type} />
        </>

    )
}
export default Menu