import { pubsub } from "./pubSub";
import { User } from "../services/data/dataTypes";
import { dateScalar } from '../services/scalar/dateScalar';
import { getUserById } from "../controllers/user.controller";
import { getDiscussionByUser } from "../controllers/discussion.controller"
import { signInAction } from "../controllers/auth.controller"
import { users } from "../databases/efandray.database.mockup"
import { findMessagesByUserId } from "../controllers/message.controller";
import { findChatByUserId } from "../controllers/chat.controller";



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


    //RELATION
    /**
     * Relation one-to-many[]
     */
    User:{
        messagesPosted: (parent:User)=>{
            return findMessagesByUserId(parent)
        },
        chats: (parent:User)=>{
            return findChatByUserId(parent)
        }
    }
}


export default resolvers