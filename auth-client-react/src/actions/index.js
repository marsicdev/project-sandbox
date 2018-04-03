import axios from 'axios'

import { AUTH_USER, AUTH_ERROR } from './types'

const ROOT_URL = "http://localhost:3002"

export const authError = (error) => ({
    type: AUTH_ERROR,
    payload: error
})

export const sigInUser = ({ email, password }) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then((response) => {
                // If request is good
                // - Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER })
                // - Save the JWT token
                const token = response.data.token
                localStorage.setItem('token', token)
                // - redirect to the route '/feature'
                // browserHistory.push('/feature')
            })
            .catch(() => {
                // IF request is bad 
                // - Show an error to the user
                dispatch(authError('Bad login info'))
            })
    }
}
