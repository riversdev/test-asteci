export const conditionsReducer = (state = [], action = { type: '', payload: null }) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        default:
            return state
    }
}