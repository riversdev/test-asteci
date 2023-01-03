export const getConditions = async () => {
    try {
        const response = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas`)
        const data = await response.json()

        return data
    } catch (error) {
        console.warn(error)
        return null
    }
}