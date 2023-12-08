import { Messages } from "../databases/efandray.database.mockup"

export const findMessagesByUserId = (args:{userId:number})=>{
    return Messages.filter(message => message.FromUser === args.userId)
}