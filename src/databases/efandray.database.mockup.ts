export const users = [
    {
        userId: 1,
        login: "JohnDoe",
        email: "john.doe@email.com",
        password: "0000",
        profilpic_path: "/public/images/1662650_1.jpg",
        status: false
    },
    {
        userId: 2,
        login: "AliceSmith",
        email: "alice.smith@email.com",
        password: "0000",
        profilpic_path: "/public/images/anya.png",
        status: false
    },
    {
        userId: 3,
        login: "BobJohnson",
        email: "bob.johnson@email.com",
        password: "0000",
        profilpic_path: "/public/images/mob.png",
        status: false
    }
]

export const Chats = [
    {
        chatId: 1,
        chatType: "individual",
        chatName: "",
        nbUserSubscribed: 2
    },
    {
        chatId: 2,
        chatType: "group",
        chatName: "Development Team",
        nbUserSubscribed: 3
    }
]

export const Messages = [
    {
        messageId: 1,
        type: "text",
        messageContent: "Lorem Ipsum dolor?",
        messagefilepath: null,
        createAt: "2023-01-01 12:00:00",
        wasRead: false,
        FromUser: 1,
        chatId: 1,
    },
    {
        messageId: 2,
        type: "image",
        messageContent: "",
        messagefilepath: "/uploads/messages/image1.jpg",
        createAt: "2023-01-02 14:30:00",
        wasRead: true,
        FromUser: 2,
        chatId: 1,
    }
]

export const Discussions = [
    {
        id: 1,
        userId: 1,
        chatId: 1
    },
    {
        id: 2,
        userId: 2,
        chatId: 1
    },
    {
        id: 3,
        userId: 1,
        chatId: 2
    },
    {
        id: 4,
        userId: 2,
        chatId: 2
    },
    {
        id: 5,
        userId: 3,
        chatId: 2
    },
]

export const AdminGroups = [
    {
        groupChatAdmintId: 1,
        chatId:2
    }
]

export const Admins = [
    {
        AdminGroup_Id: 1,
        userId: 1,
        groupChatAdmintId: 1
    }
]
  