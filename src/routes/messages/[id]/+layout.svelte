<script lang="ts">
	import MessageInput from '$lib/components/MessageThread/MessageInput.svelte';
	import TopBar from '$lib/components/MessageThread/TopBar.svelte';

	let { children } = $props();
</script>

<TopBar />
{@render children()}
<MessageInput />
