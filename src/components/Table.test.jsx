import { render, screen } from '@testing-library/react'
import { Table } from './Table'

describe('tests Table', () => {
    test('should display the table', () => {
        const { container } = render(<Table />)

        expect(screen.getAllByText('Cargando...')).toBeTruthy()

        expect(container).toMatchSnapshot()

        // screen.debug()
    })
})