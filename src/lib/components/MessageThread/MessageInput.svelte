<script lang="ts">
	import type MessageModel from '$lib/models/MessageModel';
	import { getSearchState } from '$lib/state/searchBarState.svelte';
	import dayjs from 'dayjs';
	import IoIosSend from 'svelte-icons/io/IoIosSend.svelte';

	const messageState = $state({
		message: '',
		receiverIds: ['123'],
		senderId: '456',
		senderName: 'Greg',
		time: dayjs().format('h:mm A')
	}) as MessageModel;
</script>

<div class="flex items-center justify-center">
	<div class="absolute bottom-0 mb-2 flex w-11/12 items-end gap-4 rounded-full bg-gray-800">
		<textarea
			class="h-12 w-full resize rounded-full border-indigo-50 bg-gray-800 p-2 text-lg leading-7 outline-none"
			placeholder="Type a Message"
			bind:value={messageState.message}
		>
		</textarea>

		<button class="h-12 rounded-full bg-indigo-400"> <IoIosSend /> </button>
	</div>
</div>
