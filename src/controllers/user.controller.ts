import { users } from "../databases/efandray.database.mockup"

export const getUserById = (args:{userId: number})=>{
    return users.find(user => user.userId === args.userId)
}