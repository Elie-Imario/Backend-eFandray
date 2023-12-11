import { Chats } from "../databases/efandray.database.mockup"
import { getDiscussionByUser } from "./discussion.controller"

export const findChatByUserId = (args:{userId:number})=>{
    const fetchedDiscussions = getDiscussionByUser(args).map(discussion => discussion.chatId)

    const fetchedChat = Chats.filter(chat => {
        return fetchedDiscussions.indexOf(chat.chatId) !== -1
    })
    
    return fetchedChat
}