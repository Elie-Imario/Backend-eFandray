import { signInAction } from "../controllers/auth.controller"
import { getDiscussionByUser } from "../controllers/discussion.controller"
import { users } from "../databases/efandray.database.mockup"
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