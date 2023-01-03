import { useEffect, useState } from 'react'

export const useFetch = () => {
    const [conditions, setConditions] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(null)

    useEffect(() => {
        try {
            const search = async () => {
                const response = await fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
                const data = await response.json()

                setIsLoading(false)
                setConditions(data)
            }

            search()
        } catch (error) {
            console.warn(error)
            setHasError(error)
        }
    }, [])

    return {
        conditions,
        isLoading,
        hasError
    }
}