export const getCondition = async _id => {
    try {
        const response = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${_id}`)
        const data = await response.json()

        return data
    } catch (error) {
        console.warn(error)
        return null
    }
}