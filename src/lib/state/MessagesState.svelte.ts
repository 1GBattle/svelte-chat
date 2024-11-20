import type MessageModel from "$lib/models/MessageModel";

let messageState = $state<MessageModel[]>([])

export default function getMessageState() {
    const filterMessages = (keyword: string) => {
        messageState = messageState.map(messages => messages)
                                    .filter(messages => messages.message.includes(keyword) || messages.senderName.includes(keyword))
    }

    const deleteMessage = (messageId: string) => {
        messageState = messageState.filter(message => message.id !== messageId)
    }

    const addMessage = (message: MessageModel) => {
        messageState = [message, ...messageState]
    }

return {
    get getMessageState() {
        return messageState
    },
    filterMessages,
    deleteMessage,
    addMessage
}
}