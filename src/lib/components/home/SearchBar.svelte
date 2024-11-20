<script lang="ts">
	import { getSearchState } from '$lib/state/searchBarState.svelte';

	const searchState = getSearchState();
</script>

<div class="m-2 flex items-center justify-center gap-4 p-2">
	<input
		class="w-5/6 rounded-md border-indigo-50 bg-gray-800 p-2 text-lg outline-none"
		placeholder="Search Conversations"
		bind:value={searchState.searchState.searchText}
	/>
</div>
