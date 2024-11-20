import type Thread from "$lib/components/home/Thread.svelte";
import type ThreadModel from "$lib/models/ThreadModel";

let threadState = $state<ThreadModel[]>([])

export default function getThreadState() {
    const addThread = (newThread: ThreadModel) => {
        threadState = [newThread, ...threadState]
    }

    const deleteThread = (threadId: string) => {
        threadState = threadState.filter(threads => threads.id !== threadId)
        console.log('deleted')
    }

    const updateThread = (threadId: string, updates: ThreadModel) => {
       threadState.map(thread => {
        if (thread.id !== threadId) return 
        return updates
       })
    }

    const filterThreads = (keyword: string) => {
            threadState = threadState.map(threads => threads)
                                        .filter(threads => threads.title.includes(keyword) || threads.lastMessage.includes(keyword))
        }
    return {
        get threadState(){
            return threadState
        },
        addThread,
        deleteThread,
        updateThread,
        filterThreads
    }
}
