<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let ref: any;
	let x = 0;
	let coords = spring({ x: 0 }, { stiffness: 0.05, damping: 0.5 });
	let size = spring(1);

	function clamp(x: any, min: any, max: any) {
		return Math.min(max, Math.max(min, x));
	}

	function handleMousedown(event: any) {
		if (event.type.startsWith('touch')) {
			x = event.touches[0].pageX;
		} else {
			x = event.clientX;
		}

		coords.stiffness = coords.damping = 1;

		size.set(1.1);

		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('touchmove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
		window.addEventListener('touchend', handleMouseup);
	}

	function handleMousemove(event: any) {
		let clientX = x;
		if (event.type.startsWith('touch')) {
			clientX = event.touches[0].pageX;
		} else {
			clientX = event.clientX;
		}

		const dx = clientX - x;
		x = clientX;

		coords.update(($coords) => ({ x: $coords.x + dx }));
	}

	function handleMouseup(event: any) {
		x = 0;
		coords.stiffness = 0.05;
		coords.damping = 0.5;
		coords.set({ x: 0 });
		size.set(1);

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('touchmove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
		window.removeEventListener('touchend', handleMouseup);
	}

	onMount(() => {
		ref.addEventListener('mousedown', handleMousedown);
		ref.addEventListener('touchstart', handleMousedown);
	});

	$: scale = 0.5 + (clamp(Math.abs($coords.x), 50, 300) - 50) * 0.002;
	$: av = $coords.x < 0 ? 'end' : 'start';
	$: bg = $coords.x < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f9f586';
</script>

<div
	class="item"
	style={`background: linear-gradient(120deg, ${bg} 100%); transform: scale(${$size})`}
>
	<div class="av" style={`transform: scale(${scale}); justify-self: ${av}`}></div>
	<div
		bind:this={ref}
		class="fg"
		style={`transform: translate3d(${$coords.x}px, 0, 0) scale(${$size})`}
	>
		<slot />
	</div>
</div>

<style>
	.item {
		position: relative;
		pointer-events: auto;
		transform-origin: 50% 50% 0px;
		padding-left: 32px;
		padding-right: 32px;
		box-sizing: border-box;
		display: grid;
		align-items: center;
		text-align: center;
		border-radius: 5px;
		box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);
		-webkit-user-select: none;
		user-select: none;
	}

	.fg {
		cursor: -webkit-grab;
		background-color: #272727;
		color: rgba(255, 255, 255, 0.8);
		position: absolute;
		height: 100%;
		width: 100%;
		display: grid;
		align-items: center;
		text-align: center;
		border-radius: 5px;
		box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.2);
		font-size: 3em;

		font-weight: 600;
		transition: box-shadow 0.75s;
	}

	.fg:active {
		cursor: -webkit-grabbing;
		box-shadow: 0px 15px 30px -5px rgba(0, 0, 0, 0.4);
	}

	.av {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: white;
	}
</style>
