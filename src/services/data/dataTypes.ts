type authResponse = {
    status : number,
    message: string,
    data: authUser
}

type User = {
    id: number
    login: string
    email: string
    password: string
    profilpic_path: string
    onlineStatus: boolean
}

type authUser = {
    id: number
    login: string
    email: string
    token?: string
    profilpic_path: string
    onlineStatus: boolean
}

export {
    authResponse,
    User
}