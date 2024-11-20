import type { Dayjs } from "dayjs";

export default interface MessageModel {
    senderName: string,
    senderId: string,
    time: string,
    message: string
    receiverIds: string[],
    id: string
}   