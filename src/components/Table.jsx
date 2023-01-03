import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useSingleFetch } from '../hooks/useSingleFetch'
import { Condition } from './Condition'

export const Table = () => {
    const { conditions, isLoading, hasError } = useFetch()
    const [current, setCurrent] = useState()
    const currentCondition = useSingleFetch(current)

    const { pagination, results } = conditions

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
            <Condition {...currentCondition} />
            <h3>Total de registros: {results.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probabilityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lastreporttime</th>
                        <th>LLUEVE</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(({ _id, cityid, name, state, probabilityofprecip, relativehumidity, lastreporttime }) => (
                        <tr
                            key={_id}
                        >
                            <td onClick={() => setCurrent(_id)}>{_id}</td>
                            <td>{cityid}</td>
                            <td>{name}</td>
                            <td>{state}</td>
                            <td>{probabilityofprecip}</td>
                            <td>{relativehumidity}</td>
                            <td>{lastreporttime}</td>
                            <td>{probabilityofprecip > 60 || relativehumidity > 50 ? 'SI' : 'NO'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}