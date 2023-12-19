import { Messages, users } from "../databases/efandray.database.mockup"

export const findMessageById = (args:{messageId: number}) => Messages.filter(message => message.messageId === args.messageId)

export const findMessagesByUserId = (args:{userId: number}) => Messages.filter(message => message.FromUser === args.userId)


export const findMessageOWner = (args:{FromUser: number}) => users.find(user => user.userId === args.FromUser)

export const findReceiverMsg = (args:{ToUser: number}) => users.find(user => user.userId === args.ToUser)

export const findChatMessage = (args:{chatId: number}) => Messages.filter(message => message.chatId === args.chatId)


export const getChatMessages = (args:{chatId: number}, argsFilter:{first:number, orderBy:{fields: string, orderDirection: string}})=>{
    const chatMessagesFetched = Messages.filter(message => message.chatId === args.chatId)

    if(chatMessagesFetched.length>0){
        let ChatMessages = []
        if(argsFilter.first && argsFilter.orderBy){
            if(argsFilter.orderBy.orderDirection === "ASC"){
                for(let i = 0; i<argsFilter.first; i++){
                    ChatMessages.push(chatMessagesFetched[i])
                }  
            }else if(argsFilter.orderBy.orderDirection === "DESC"){
                for(let i = chatMessagesFetched.length-1; i>=chatMessagesFetched.length - argsFilter.first; i--){
                    ChatMessages.push(chatMessagesFetched[i])
                }   
            }
        }else if(argsFilter.first || argsFilter.orderBy){
            if(argsFilter.first){
                for(let i = 0; i<argsFilter.first; i++){
                    ChatMessages.push(chatMessagesFetched[i])
                }  
            } else if(argsFilter.orderBy){
                if(argsFilter.orderBy.orderDirection === "ASC"){
                    for(let i = 0; i<chatMessagesFetched.length; i++){
                        ChatMessages.push(chatMessagesFetched[i])
                    }  
                }else if(argsFilter.orderBy.orderDirection === "DESC"){
                    for(let i = chatMessagesFetched.length-1; i >= 0; i--){
                        ChatMessages.push(chatMessagesFetched[i])
                    }   
                }
            }
        }
        return ChatMessages
    }
    return chatMessagesFetched
}