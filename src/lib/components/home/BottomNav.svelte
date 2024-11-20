<script>
	import FaRegBell from 'svelte-icons/fa/FaRegBell.svelte';
	import TiPlusOutline from 'svelte-icons/ti/TiPlusOutline.svelte';
	import TiHomeOutline from 'svelte-icons/ti/TiHomeOutline.svelte';
	import { goto } from '$app/navigation';
</script>

<div class="flex items-center justify-center">
	<div
		class="absolute bottom-0 flex w-full flex-row items-center justify-around bg-gray-900 px-4 py-2"
	>
		<button class="-mb-2 h-10 text-gray-600 active:text-purple-400" onclick={() => goto('/')}>
			<TiHomeOutline />
		</button>

		<button class="h-14 text-gray-600 active:text-purple-400" onclick={() => goto('/messages/new')}>
			<TiPlusOutline />
		</button>

		<button
			class="-mb-2 h-10 text-gray-600 active:text-purple-400"
			onclick={() => goto('/notifications')}
		>
			<FaRegBell />
		</button>
	</div>
</div>
