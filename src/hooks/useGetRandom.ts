const useGetRandom = (min: number, max: number): number => {
    const result: number = Math.round(min + Math.random() * (max - min))
    return result
}

export default useGetRandom