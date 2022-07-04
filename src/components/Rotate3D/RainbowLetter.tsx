import React from 'react'

interface IRainbowLetterProps {
    children: string
}

interface latter {
    latter: string
    color: string
}

const RainbowLetter: React.FC<IRainbowLetterProps> = ({ children }) => {
    const [letterArray, setLetterArray] = React.useState<latter[]>([])
    const colorsArray = [
        "red",
        "blue",
        "yellow",
        "brown",
        "aqua",
        "gold",
        "goldenrod",
        "royalblue",
        "blueviolet",
        "#00DC53",
        "tomato",
        "lawngreen",
        "chocolate"
    ]
    const getRandomColor = (): string => {
        let result = colorsArray[Math.round(Math.random() * colorsArray.length)]
        return result
    }

    const createArreyColor = () => {
        const array: string[] = children.split("")
        let resultArray: latter[] = array.map((oneLatter) => {
            return {
                latter: oneLatter,
                color: getRandomColor()
            }
        })
        setLetterArray(resultArray)
    }
    React.useEffect(() => {
        createArreyColor()
    }, [])

    setTimeout(() => {
        createArreyColor()
    }, 50)

    return (
        <>
            {
                letterArray.map((letter, index) => {
                    return <span
                        key={index}
                        style={{ color: letter.color }}
                    >
                        {letter.latter}
                    </span>
                })
            }
        </>

    )
}

export default RainbowLetter