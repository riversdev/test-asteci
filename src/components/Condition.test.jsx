import { render, screen } from '@testing-library/react'
import { Condition } from './Condition'

describe('tests Condition', () => {
    test('should display error message', () => {
        render(<Condition />)

        const pTag = screen.getByText('Ooops. Error de la api !')

        expect(pTag).toBeInTheDocument()

        // screen.debug()
    })

    test('should display loading message', () => {
        const condition = {
            "condition": {
                "pagination": {
                    "pageSize": 100,
                    "page": 1,
                    "total": 1
                },
                "results": [
                    {
                        "_id": "5952983359954a0adbf7ab0a",
                        "cityid": "MXAS0170",
                        "validdateutc": "20170627T140000Z",
                        "winddirectioncardinal": "S",
                        "probabilityofprecip": "60",
                        "relativehumidity": "91",
                        "name": "Asientos",
                        "date-insert": "2017-06-27T17:36:43.088Z",
                        "longitude": "-102.0893",
                        "state": "Aguascalientes",
                        "lastreporttime": "20170627T092453Z",
                        "skydescriptionlong": "Tormentas dispersas",
                        "stateabbr": "AGU",
                        "tempc": "15",
                        "latitude": "22.23832",
                        "iconcode": "96",
                        "windspeedkm": "5"
                    }
                ]
            },
            "isLoading": false,
            "hasError": null
        }

        render(<Condition {...condition} />)

        expect(screen.getByRole('heading')).toBeTruthy()
        // screen.debug()
    })
})