/* eslint-disable @typescript-eslint/no-unused-vars */
export const isAuthorised = (email: string): boolean => {
    console.log(email)
    const adminUsers: string[] = process.env.REACT_APP_AUTHORISED_USERS?.split(',') || []
    console.log(adminUsers)
    return adminUsers.includes(email)
}

export const isSuperAdmin = (email: string) => {
    const adminUsers: string[] = process.env.REACT_APP_SUPERADMIN?.split(',') || []
    const authorised = adminUsers.includes(email)
    if (authorised && isAuthorised(email)) {
        return true
    }
    return false
}