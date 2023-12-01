type Response = {
    statusCode : number,
    message: string
}

type User = {
    id: number
    login: string
    email: string
    password: string
    profilpic_path: string
}

export {
    Response,
    User
}