// State argument is not application state, only the state
// this reducer is responsible for
export default function (state = null, action) {
    // Redux does not allow to return undefined from
    // reducer it will always throw an arrow 
    switch (action.type) {
        case 'BOOK_SELECTED':
            // Never mutate object returned from reducer
            // Always return fresh object
            return action.payload;
        default:
            return state;
    }
}
