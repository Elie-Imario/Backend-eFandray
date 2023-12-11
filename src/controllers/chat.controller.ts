import { Chats, users } from "../databases/efandray.database.mockup"
import { getDiscussionByChat, getDiscussionByUser } from "./discussion.controller"

export const findChatByUserId = (args:{userId:number})=>{
    const fetchedDiscussions = getDiscussionByUser(args).map(discussion => discussion.chatId)
    return Chats.filter(chat => fetchedDiscussions.indexOf(chat.chatId) !== -1)
}

export const findSubscribedUser = (args:{chatId:number})=>{
    const subscribeUsers = getDiscussionByChat(args).map(discussion => {
        const currentChat = discussion.chatId
        if(currentChat === discussion.chatId){
            return discussion.userId
        }
    })
    return users.filter(user => subscribeUsers.indexOf(user.userId) !== -1)
}