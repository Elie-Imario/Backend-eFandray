import { Discussions } from "../databases/efandray.database.mockup"

export const getDiscussionByUser = (args:{userId: number})=>{
    return Discussions.filter(discussion => discussion.userId === args.userId)
}