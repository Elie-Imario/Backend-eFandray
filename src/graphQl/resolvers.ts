import { pubsub } from "./pubSub";
import { Chat, Message, User } from "../services/data/dataTypes";
import { dateScalar } from '../services/scalar/dateScalar';
import { getUserById } from "../controllers/user.controller";
import { getDiscussionByUser } from "../controllers/discussion.controller"
import { signInAction } from "../controllers/auth.controller"
import { Chats, Discussions, Messages, users } from "../databases/efandray.database.mockup"
import { findChatMessage, findMessageOWner, findMessagesByUserId, findReceiverMsg, getChatMessages } from "../controllers/message.controller";
import { findChatById, findChatByUserId, findSubscribedUser } from "../controllers/chat.controller";



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
        Messages: ()=> Messages,
        Chats: () => Chats, 
        Chat: (parent: any, args:{chatId: number}) => findChatById(args),
        Discussions: ()=> Discussions,
        findUserById: (parent: any, args:{userId: number}) => getUserById(args),
        UserChatHistory: (parent: any, args:{userId: number}) => getDiscussionByUser(args),
        ChatMessages: (parent: any, args:{chatId: number}) => findChatMessage(args)
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
    },
    Message:{
        FromUser: (parent:Message)=>{
            return findMessageOWner(parent)
        },
        ToUser: (parent:Message)=>{
            return findReceiverMsg(parent)
        },
        chat: (parent:Message)=>{
            return findChatById(parent)
        },
    },
    Chat:{
        usersSubscribed: (parent:Chat)=>{
            return findSubscribedUser(parent)
        },
        message: (parent:Chat, args:{first : number, orderBy:{fields: string, orderDirection: string}})=>{
            return getChatMessages(parent, args)
        }
    },
    //RELATION
    /**
     * Relation many-to-many[]
     */
    Discussion:{
        chat: (parent:Chat)=>{
            return findChatById(parent)
        }
    }
}


export default resolvers