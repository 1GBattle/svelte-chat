<script lang="ts">
	import SearchBar from '$lib/components/home/SearchBar.svelte';
	import ThreadList from '$lib/components/home/ThreadList.svelte';
	import { getSearchState } from '$lib/state/searchBarState.svelte';

	const searchState = getSearchState();
</script>

<div>
	{#if searchState.searchState.isSearchOpen}
		<SearchBar />
	{/if}

	<div class="max-h-[46rem] overflow-auto">
		<ThreadList />
	</div>
</div>
