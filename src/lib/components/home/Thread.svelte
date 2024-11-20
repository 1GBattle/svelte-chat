<script lang="ts">
	import image from '$lib/assets/logo.png';
	import type ThreadModel from '$lib/models/ThreadModel';
	import { swipe, type SwipePointerEventDetail } from 'svelte-gestures';
	import Slider from './Slider.svelte';
	import TiTrash from 'svelte-icons/ti/TiTrash.svelte';
	import { slide } from 'svelte/transition';
	import getThreadState from '$lib/state/ThreadsState.svelte';
	import { goto } from '$app/navigation';

	interface Props extends ThreadModel {}

	let { id, hasNewMessages, lastMessage, memberIds, newMessageCount, title }: Props = $props();

	let threadsState = getThreadState();
	let hasSwipedLeft = $state(false);
	let isThreadActive = $state(true);
	const handleThreadSwipe = (e: CustomEvent<SwipePointerEventDetail>) => {
		e.stopPropagation();
		e.detail.direction === 'left' ? (hasSwipedLeft = true) : (hasSwipedLeft = false);
	};

	const handleDelete = (e: MouseEvent) => {
		e.stopPropagation();
		threadsState.deleteThread(id);

		isThreadActive = false;
	};
</script>

<div
	class="flex flex-row items-center gap-4 p-2"
	use:swipe
	onswipe={(e) => handleThreadSwipe(e)}
	transition:slide={{ duration: 1000, axis: 'x' }}
	onclick={() => goto(`/messages/${id}`)}
	onkeydown={null}
	role="button"
	tabindex={null}
>
	<div>
		<img class="h-10 w-10 rounded-full" src={image} alt="profile" />
	</div>

	<div class="w-full">
		<div class="flex justify-between">
			<h1
				class="w-[240px] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold md:w-[600px] lg:w-[800px] xl:w-[1100px]"
			>
				{title}
			</h1>
			<p class="md:mr-8 lg:mr-16">3:30pm</p>
		</div>
		<p>{lastMessage}</p>
	</div>

	{#if hasSwipedLeft}
		<Slider>
			<button class="h-16 bg-red-500 text-black" onclick={(e) => handleDelete(e)}>
				<TiTrash />
			</button>
		</Slider>
	{/if}
</div>
