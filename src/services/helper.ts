export const getAuthToken = () => {
    return localStorage.getItem('user:token')
}

export const setAuthToken = (token: Record<string, any>) => localStorage.setItem('user:token', JSON.stringify(token))