import {gql} from 'apollo-server'

const typeDefs =  gql `
    type User {
        id: ID
        login: String
        email: String
        password: String
        profilpic_path: String
    }
    type Query{
        Users : [User]
    }
`


export default typeDefs
