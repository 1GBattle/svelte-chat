<script lang="ts">
	import BottomNav from '$lib/components/home/BottomNav.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

{@render children()}
<BottomNav />
