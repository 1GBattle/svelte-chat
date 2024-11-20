<script>
	import { getSearchState } from '$lib/state/searchBarState.svelte';
	import logo from '$lib/assets/logo.png';
	import SearchBar from './SearchBar.svelte';
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	const searchState = getSearchState();
</script>

<div class="mb-8 flex h-12 flex-row justify-between p-4">
	<div class="flex h-10 flex-row items-center justify-center gap-4">
		<img class="h-10 rounded-full" src={logo} alt="logo" />
		<h1 class="text-xl font-semibold">Hello Username</h1>
	</div>

	<div class="flex h-10 flex-row items-center justify-between gap-4">
		<button class="h-8">
			<IoIosSearch />
		</button>

		<button class="h-8">
			<IoIosMenu />
		</button>
	</div>
</div>
