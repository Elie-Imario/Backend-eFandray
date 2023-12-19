import { gql } from 'apollo-server';

const typeDefs =  gql `
    scalar Date

    input filterInput{
        fields: String,
        orderDirection: String
    }

    type User {
        userId: ID
        login: String
        email: String
        password: String
        profilpic_path: String
        status: Boolean
        messagesPosted: [Message]
        chats: [Chat]
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
        chat: Chat
    }

    type Chat {
        chatId: ID,
        chatType: ChatType,
        chatName: String,
        chatGroupPic: String,
        nbUserSubscribed: Int!
        message(first:Int, orderBy:filterInput): [Message]
        usersSubscribed: [User!]
    }

    type Message {
        messageId: ID,
        type: MsgType,
        messageContent: String,
        messagefilepath: String,
        createAt: Date,
        wasRead: Boolean,
        FromUser: User,
        ToUser: User,
        chat: Chat,
    }

    enum ChatType {
        GROUP
        PRIVATE
    }    

    enum MsgType {
        TXT,
        IMG,
        FILE
    }

    type Query {
        Users : [User]
        findUserById(userId: Int!): User
        Chats: [Chat]
        Discussions: [Discussion]
        UserChatHistory(userId: Int!): [Discussion]
        Messages: [Message]
        ChatMessages(chatId: Int!): [Message]
    }

    type Mutation {
        SignIn(auth_identification: String password: String) : authResponse!
    }

    type Subscription {
        newUserConnected: authUser!
    }
`

export default typeDefs
