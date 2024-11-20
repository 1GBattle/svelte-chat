<script lang="ts">
	import BottomNav from '$lib/components/home/BottomNav.svelte';
	import ChatTypePicker from '$lib/components/home/ChatTypePicker.svelte';
	import Header from '$lib/components/home/header.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

<div class="h-screen">
	<Header />
	<ChatTypePicker />
	{@render children()}

	<div class="absolute inset-x-0 bottom-0">
		<BottomNav />
	</div>
</div>
