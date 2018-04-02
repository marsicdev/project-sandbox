import { KEY_IS_AUTHENTICATED } from "../shared/constants";


export const login = (params) => {
    localStorage.setItem(KEY_IS_AUTHENTICATED, true)
}

export const logout = () => {
    localStorage.clear()
}

export const isAuthenticated = () => {
    return (!!localStorage.getItem(KEY_IS_AUTHENTICATED) === true)
}