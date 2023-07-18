export const getAuthToken = () => {
    return localStorage.getItem('user:token')
}
export const getGamePresenters = () => {
    return localStorage.getItem('gamePresenters')
}

export const setAuthToken = (token: Record<string, any>) => localStorage.setItem('user:token', JSON.stringify(token))

export const setGamePresenters = (token: Record<string, any>) => localStorage.setItem('gamePresenters', JSON.stringify(token))