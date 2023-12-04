import { users } from "../databases/userData.mockup"
import { authResponse } from "../services/data/dataTypes"

export const signInAction = (args: { auth_identification: string; password: string }) => {
    const response = {} as authResponse
    const fetchedUser = users.find(user => (user.login.toLowerCase() === args.auth_identification.toLowerCase() || user.email.toLowerCase() === args.auth_identification.toLowerCase()))
    if(fetchedUser){
        if(fetchedUser.password === args.password){
            response.status = 200
            response.message = "Accès autorisé"
            response.data = fetchedUser
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
