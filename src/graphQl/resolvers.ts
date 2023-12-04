import { signInAction } from "../controllers/auth.controller"
import { users } from "../databases/userData.mockup"

const resolvers = {
    Query:{
        Users: () => users,
    },
    Mutation:{
        SignIn: (parent: any, args: { auth_identification: string; password: string })=>{
            return signInAction(args)
        }
    }
}


export default resolvers