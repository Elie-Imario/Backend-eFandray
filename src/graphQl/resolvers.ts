import { pubsub } from "./pubSub"
import { dateScalar } from '../services/scalar/dateScalar';
import { getUserById } from "../controllers/user.controller";
import { getDiscussionByUser } from "../controllers/discussion.controller"
import { signInAction } from "../controllers/auth.controller"
import { users } from "../databases/efandray.database.mockup"



const NEW_USER = "NewUser"

const resolvers = {
    Date: dateScalar,

    Subscription:{
        newUserConnected:{
            subscribe: ()=> pubsub.asyncIterator(NEW_USER)
        }
    },

    Query:{
        Users: () => users,
        findUserById: (parent: any, args:{userId: number})=>{
            return getUserById(args)
        },
        findDiscusssionsByUser: (parent: any, args:{userId: number})=>{
            return getDiscussionByUser(args)
        }
    },

    Mutation:{
        SignIn: (parent: any, args: { auth_identification: string; password: string })=>{
            pubsub.publish(NEW_USER, {
                newUserConnected: signInAction(args).data
            })

            return signInAction(args)
        }
    },
}


export default resolvers