<script lang="ts">
	import photo from '$lib/assets/logo.png';
	import type MessageModel from '$lib/models/MessageModel';

	interface Props extends MessageModel {}

	const { message, senderId, receiverId, senderName, time, id }: Props = $props();

	const myId = '123';

	const messagePosition: () => 'left' | 'right' = (senderId: 'string') => {
		return myId === senderId ? 'right' : 'left';
	};
</script>

{#if messagePosition(senderId) === 'left'}
	<div class="flex w-5/6 items-end justify-start gap-2">
		<img class="h-8 w-8 rounded-full" src={photo} />

		<div
			class="text-md mb-4 max-h-[24rem] overflow-auto rounded-lg bg-gray-800 px-3 py-1 leading-8"
		>
			<p class="ml-4">{message}</p>

			<div class="flex justify-start">
				<p class="text-sm text-gray-300">{time}</p>
			</div>
		</div>
	</div>
{:else}
	<div class="flex justify-end">
		<div class="flex w-5/6 items-end justify-end gap-2">
			<div
				class="text-md mb-4 max-h-[24rem] overflow-auto rounded-lg bg-gray-800 px-3 py-1 leading-8"
			>
				<p class="mr-4">{message}</p>

				<div class="flex justify-end">
					<p class="text-sm text-gray-300">{time}</p>
				</div>
			</div>

			<img class="h-8 w-8 rounded-full" src={photo} />
		</div>
	</div>
{/if}
