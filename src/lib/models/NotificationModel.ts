interface NotificationModel {
    time: string,
    notificationType: 'group' | 'pm',
    isNotiOpened: boolean,
    senderId: string,
    senderName: string,
    receiverIds: string[]
}