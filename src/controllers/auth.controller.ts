import { users } from "../databases/efandray.database.mockup"
import { User, authResponse } from "../services/data/dataTypes"

export const signInAction = (args: { auth_identification: string; password: string }) => {
    const response = {} as authResponse
    const fetchedUser = users.find(user => (user.login.toLowerCase() === args.auth_identification.toLowerCase() || user.email.toLowerCase() === args.auth_identification.toLowerCase())) as User
    if(fetchedUser){
        if(fetchedUser.password === args.password){
            const userConnected = {...fetchedUser, status: true}
            response.status = 200
            response.message = "Accès autorisé"
            response.data = userConnected
        } else{
            response.status = 401
            response.message = "Accès non autorisé"
        }
    }else{
        response.status = 404
        response.message = "User not found"
    }

    return response
}
