import { Messages } from "../databases/efandray.database.mockup"

export const findMessagesByUserId = (args:{userId:number})=>{
    console.log(Messages.filter(message => message.FromUser === args.userId))
    return Messages.filter(message => message.FromUser === args.userId)
}