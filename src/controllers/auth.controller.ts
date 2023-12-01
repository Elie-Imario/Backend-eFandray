import { users } from "../databases/userData.mockup"
import { Response } from "../services/data/dataTypes"

export const signInAction = (args: { login: string; email: string; password: string }) => {
    console.log(args)
    const resposne = {} as Response
    const fetchedUser = users.find(user => (user.login.toLowerCase() === args.login?.toLowerCase() || user.email.toLowerCase() === args.email?.toLowerCase()))
    if(fetchedUser){
        if(fetchedUser.password === args.password){
            resposne.statusCode = 200
            resposne.message = "Accès autorisé"
        } else{
            resposne.statusCode = 401
            resposne.message = "Accès non autorisé"
        }
    }else{
        resposne.statusCode = 404
        resposne.message = "User not found"
    }

    return resposne
}
