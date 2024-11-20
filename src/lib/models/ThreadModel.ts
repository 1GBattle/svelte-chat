export default interface ThreadModel {
    id: string,
    memberIds: string[]
    hasNewMessages: boolean
    newMessageCount: number
    title: string,
    lastMessage: string
    lastMessageTime: string
}