<script lang="ts">
	import { getChatTypeState } from '$lib/state/ChatTypeState.svelte';

	const chatTypeState = getChatTypeState();
	const { setActiveTab } = chatTypeState;

	const checkActiveTab = (tabName: string) => {
		return chatTypeState.getChatTypeState.activeTab === tabName ? true : false;
	};
</script>

<div class="mb-4 flex items-center justify-center">
	<div class="flex h-10 w-4/6 flex-row items-center justify-evenly rounded-full bg-gray-800 p-1">
		<button
			class={`w-1/3 rounded-full p-1 ${checkActiveTab('All') ? 'bg-gray-600' : ''}`}
			onclick={() => setActiveTab('All')}
		>
			<h3>All</h3>
		</button>

		<button
			class={`w-1/3 rounded-full p-1 ${checkActiveTab('Group') ? 'bg-gray-600' : ''}`}
			onclick={() => setActiveTab('Group')}
		>
			<h3>Group</h3>
		</button>

		<button
			class={`w-1/3 rounded-full p-1 ${checkActiveTab('Chats') ? 'bg-gray-600' : ''}`}
			onclick={() => setActiveTab('Chats')}
		>
			<h3>Chats</h3>
		</button>
	</div>
</div>
