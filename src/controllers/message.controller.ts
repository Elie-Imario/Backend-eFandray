import { Chats, Messages, users } from "../databases/efandray.database.mockup"

export const findMessagesByUserId = (args:{userId:number})=>{
    return Messages.filter(message => message.FromUser === args.userId)
}

export const findMessageOWner = (args:{FromUser: number})=>{
    return users.find(user => user.userId === args.FromUser)
}

export const findReceiverMsg = (args:{ToUser: number})=>{
    return users.find(user => user.userId === args.ToUser)
}

export const findChat = (args:{chatId: number})=>{
    return Chats.find(chat => chat.chatId === args.chatId)
}