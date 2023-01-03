import { render, screen } from "@testing-library/react"
import App from "./App"

describe('tests App', () => {
    test('should display all elements', () => {
        render(<App />)

        expect(screen.getByText('Test')).toBeTruthy()
        expect(screen.getByText('Cargando...')).toBeTruthy()

        // screen.debug()
    })

    test('should match with snapshot', () => {
        const { container } = render(<App />)

        expect(container).toMatchSnapshot()
    })
})