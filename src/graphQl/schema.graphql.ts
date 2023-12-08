import { gql } from 'apollo-server';

const typeDefs =  gql `
    type User {
        userId: ID
        login: String
        email: String
        password: String
        profilpic_path: String
        status: Boolean
    }

    type authUser {
        userId: ID,
        login: String
        email: String
        token: String
        profilpic_path: String
        status: Boolean
    }
    
    type authResponse {
        status: Int!
        message: String!
        data: authUser
    }

    
    type Discussion {
        id: ID,
        userId: Int!,
        chatId: Int!
    }

    type Query {
        Users : [User],
        findDiscusssionsByUser(userId: Int!): [Discussion]
    }

    type Mutation {
        SignIn(auth_identification: String password: String) : authResponse!
    }

    type Subscription {
        newUserConnected: authUser!
    }
`

export default typeDefs
