<script lang="ts">
	import type MessageModel from '$lib/models/MessageModel';
	import dayjs from 'dayjs';
	import MessageBubble from './MessageBubble.svelte';

	const messages: MessageModel[] = [
		{
			message: 'Hello World',
			receiverIds: ['456'],
			senderId: '123',
			senderName: 'Something here',
			time: dayjs().format('h:mm A'),
			id: '123'
		},
		{
			message: 'Hello World',
			receiverIds: ['123'],
			senderId: '456',
			senderName: 'Something here',
			time: dayjs().format('h:mm A'),
			id: '456'
		}
	];
</script>

<div class="flex flex-col gap-8">
	{#each messages as { message, receiverIds, senderId, senderName, time, id }}
		<MessageBubble {senderId} {message} {receiverIds} {senderName} {time} {id} />
	{/each}
</div>
