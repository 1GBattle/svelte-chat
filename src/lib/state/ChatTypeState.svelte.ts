let chatTypeState = $state<{activeTab: 'All' | 'Group' | 'Chats'}>({
    activeTab: 'All'  
})

export const getChatTypeState = () => {
    const setActiveTab = (tab: 'All' | 'Group' | 'Chats') => {
        chatTypeState = {activeTab: tab}
    }

    return {
        get getChatTypeState() {
            return chatTypeState
        }, setActiveTab
    }
}