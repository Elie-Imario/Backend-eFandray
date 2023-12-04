import { gql } from 'apollo-server';

const typeDefs =  gql `
    type User {
        id: ID
        login: String
        email: String
        password: String
        profilpic_path: String
    }

    type authUser {
        id: ID,
        login: String
        email: String
        token: String
        profilpic_path: String

    }
    
    type authResponse {
        status: Int!
        message: String!
        data: authUser
    }

    type Query {
        Users : [User]
    }

    type Mutation {
        SignIn(auth_identification: String password: String) : authResponse!
    }
`

export default typeDefs
