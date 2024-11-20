<script>
	import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte';
	import IoMdPersonAdd from 'svelte-icons/io/IoMdPersonAdd.svelte';
	import photo from '$lib/assets/logo.png';

	import { goto } from '$app/navigation';
</script>

<div class="flex h-24 w-full items-center justify-between px-1 py-2">
	<button class="h-10 text-gray-300" onclick={() => goto('/')}>
		<IoIosArrowBack />
	</button>

	<div class="flex items-center justify-center gap-4">
		<img src={photo} class="w-9 rounded-full" alt="profile" />
		<h1
			class="w-[8rem] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold max-md:w-[32rem] max-sm:w-[16rem] md:w-[32rem] lg:w-[50rem] xl:w-[64rem]"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, corrupti rerum. Dolores
			molestiae blanditiis nam qui, ab numquam ratione illo sunt ex impedit quasi, ipsa nobis. Quae
			iste amet a?
		</h1>
	</div>

	<button class="h-9">
		<IoMdPersonAdd />
	</button>
</div>
