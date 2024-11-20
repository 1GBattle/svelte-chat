<script lang="ts">
	import Thread from './Thread.svelte';
	import { getSearchState } from '$lib/state/searchBarState.svelte';
	import getThreadState from '$lib/state/ThreadsState.svelte';
	import dayjs from 'dayjs';

	const threadState = getThreadState();
	const searchState = getSearchState();
	threadState.addThread({
		hasNewMessages: true,
		id: '123',
		memberIds: ['123', '456'],
		newMessageCount: 5,
		title: 'Receiver Name',
		lastMessage: 'Hello World',
		lastMessageTime: dayjs().format('H:mm A')
	});

	threadState.addThread({
		hasNewMessages: true,
		id: '345',
		memberIds: ['123', '456'],
		newMessageCount: 5,
		title: 'Receiver Name',
		lastMessage: 'Hello World',
		lastMessageTime: dayjs().format('H:mm A')
	});

	$effect(() => {
		// if (searchState.searchState.searchText) {
		// 	threadState.filterThreads(searchState.searchState.searchText);
		// 	console.log('search string', searchState.searchState.searchText);
		// }
	});
</script>

<div class="flex flex-col gap-2">
	{#each threadState.threadState as { hasNewMessages, id, lastMessage, memberIds, newMessageCount, title, lastMessageTime }}
		<Thread
			{hasNewMessages}
			{id}
			{lastMessage}
			{memberIds}
			{newMessageCount}
			{title}
			{lastMessageTime}
		/>
	{/each}
</div>
