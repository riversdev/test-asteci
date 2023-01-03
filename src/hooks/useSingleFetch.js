import { useEffect, useState } from 'react'

export const useSingleFetch = _id => {
    const [condition, setCondition] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        try {
            const search = async () => {
                const response = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${_id}`)
                const data = await response.json()

                setIsLoading(false)
                setCondition(data)
            }

            if (_id) {
                search()
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            console.warn(error)
            setHasError(error)
        }
    }, [_id])

    return {
        condition,
        isLoading,
        hasError
    }
}