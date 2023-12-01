import { users } from "../databases/userData.mockup"

const resolvers = {
    Query:{
        Users: ()=> users
    }
}


export default resolvers