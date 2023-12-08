type authResponse = {
    status : number,
    message: string,
    data: authUser
}

type User = {
    userId: number
    login: string
    email: string
    password: string
    profilpic_path: string
    status: boolean
}

type authUser = {
    userId: number
    login: string
    email: string
    token?: string
    profilpic_path: string
    status: boolean
}

type Chat = {
    chatId: number,
    chatType: ChatType,
    chatName: string,
    nbUserSubscribed: number
}

type Message = 
{
    messageId: number,
    type: MsgType,
    messageContent: string,
    messagefilepath?: string,
    createAt: Date,
    wasRead: boolean,
    FromUser: number,
    chatId: number,
}

type Discussion = 
{
    id: number,
    userId: number,
    chatId: number
}

type AdminGroup = 
{
    groupChatAdmintId: number,
    chatId: number
}

type Admins = 
{
    AdminGroup_Id: number,
    userId: number,
    groupChatAdmintId: number
}

enum MsgType{
    Text = "TXT",
    Image = "IMG",
    File = "FILE"
}

enum ChatType{
    Group = "GROUP",
    Private = "PRIVATE"
}

export {
    authResponse,
    User,
    AdminGroup,
    Admins,
    Chat,
    Discussion,
    Message
}