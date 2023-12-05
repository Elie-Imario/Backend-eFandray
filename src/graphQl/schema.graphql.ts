import { gql } from 'apollo-server';

const typeDefs =  gql `
    type User {
        id: ID
        login: String
        email: String
        password: String
        profilpic_path: String
        onlineStatus: Boolean
    }

    type authUser {
        id: ID,
        login: String
        email: String
        token: String
        profilpic_path: String
        onlineStatus: Boolean
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

    type Subscription {
        newUserConnected: authUser!
    }
`

export default typeDefs
