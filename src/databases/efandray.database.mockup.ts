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
        chatType: "PRIVATE",
        chatName: "",
        chatGroupPic: null,
        nbUserSubscribed: 2
    },
    {
        chatId: 2,
        chatType: "GROUP",
        chatName: "Vegas",
        chatGroupPic: "/public/images/vegas.jpg",
        nbUserSubscribed: 3
    },
    {
        chatId: 3,
        chatType: "GROUP",
        chatName: "Team Tetsuya",
        chatGroupPic: null,
        nbUserSubscribed: 2
    },
    {
        chatId: 4,
        chatType: "PRIVATE",
        chatName: "",
        chatGroupPic: null,
        nbUserSubscribed: 2
    }
]

export const Messages = [
    {
        messageId: 1,
        type: "TXT",
        messageContent: "Lorem Ipsum dolor?",
        messagefilepath: null,
        createAt: new Date("2023-01-01 12:00:00"),
        wasRead: false,
        FromUser: 1,
        ToUser: 2,
        chatId: 1,
    },
    {
        messageId: 2,
        type: "IMG",
        messageContent: "vlcsnap-2023-11-06-16h57m23s132.png",
        messagefilepath: "/public/images/vlcsnap-2023-11-06-16h57m23s132.png",
        createAt: new Date("2023-01-01 14:30:00"),
        wasRead: true,
        FromUser: 2,
        ToUser: 1,
        chatId: 1,
    },
    {
        messageId: 3,
        type: "IMG",
        messageContent: "vlcsnap-2023-11-06-16h57m25s918.png",
        messagefilepath: "/public/images/vlcsnap-2023-11-06-16h57m25s918.png",
        createAt: new Date("2023-01-01 14:31:00"),
        wasRead: true,
        FromUser: 2,
        ToUser: 1,
        chatId: 1,
    },
    {
        messageId: 4,
        type: "TXT",
        messageContent: "So??",
        messagefilepath: null,
        createAt: new Date("2023-01-01 14:31:15"),
        wasRead: true,
        FromUser: 2,
        ToUser: 1,
        chatId: 1,
    },
    {
        messageId: 5,
        type: "TXT",
        messageContent: "WHATTTTT?",
        messagefilepath: null,
        createAt: new Date("2023-01-01 15:00:00"),
        wasRead: true,
        FromUser: 1,
        ToUser: 2,
        chatId: 1,
    },
    {
        messageId: 6,
        type: "IMG",
        messageContent: "No-Memes-15.jpg",
        messagefilepath: "/public/images/No-Memes-15.jpg",
        createAt: new Date("2023-01-01 15:15:00"),
        wasRead: false,
        FromUser: 1,
        ToUser: 2,
        chatId: 1,
    },
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
    {
        id: 6,
        userId: 2,
        chatId: 3
    },
    {
        id: 7,
        userId: 3,
        chatId: 3
    },
    {
        id: 8,
        userId: 1,
        chatId: 4
    },
    {
        id: 9,
        userId: 3,
        chatId: 4
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
  