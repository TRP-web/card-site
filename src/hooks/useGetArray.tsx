const useGetArray = (element: any, howMany: number = 1): any[] => {
    let result: any[] = []
    for (let index = 0; index < howMany; index++) {
        result.push(element)
    }
    return result
}

export default useGetArray