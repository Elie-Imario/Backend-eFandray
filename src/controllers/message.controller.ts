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

export const getChatMessages = (args:{chatId: number})=>{
    return Messages.filter(message => message.chatId === args.chatId)
}