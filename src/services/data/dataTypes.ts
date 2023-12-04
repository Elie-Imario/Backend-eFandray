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
}

type authUser = {
    id: number
    login: string
    email: string
    token?: string
    profilpic_path: string
}

export {
    authResponse,
    User
}