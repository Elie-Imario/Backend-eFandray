import { gql } from 'apollo-server';

const typeDefs =  gql `
    type User {
        id: ID
        login: String
        email: String
        password: String
        profilpic_path: String
    }

    type Response {
        statusCode: Int
        message: String
    }

    type Query {
        Users : [User]
    }

    type Mutation {
        SignIn(login: String email: String password: String) : Response!
    }
`


export default typeDefs
