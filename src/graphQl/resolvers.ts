import { signInAction } from "../controllers/auth.controller"
import { users } from "../databases/userData.mockup"
import { pubsub } from "./pubSub"


const NEW_USER = "NewUser"

const resolvers = {
    Subscription:{
        newUserConnected:{
            subscribe: ()=> pubsub.asyncIterator(NEW_USER)
        }
    },

    Query:{
        Users: () => users,
    },

    Mutation:{
        SignIn: (parent: any, args: { auth_identification: string; password: string })=>{
            pubsub.publish(NEW_USER, {
                newUserConnected:signInAction(args).data
            })

            return signInAction(args)
        }
    },
}


export default resolvers