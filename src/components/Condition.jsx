export const Condition = ({ condition, isLoading, hasError }) => {
    if (isLoading === true) {
        return (
            <p>Cargando...</p>
        )
    }

    if (hasError !== null) {
        return (
            <p>Ooops. Error de la api !</p>
        )
    }

    return (
        <>
            {condition && <div className='condition'>
                <h4>Condicion atmosferica seleccionada</h4>
                <hr />
                <p>{JSON.stringify(condition, null, 3)}</p>
            </div>}
        </>
    )
}