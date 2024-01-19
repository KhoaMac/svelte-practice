<script lang="ts">
	import { linear } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data;
	$: products = data.responseGetAllProducts.products;
</script>

<div transition:fly={{ y: 100, duration: 500, easing: linear }}>
	<div class="flex gap-2 w-full">
		{#each products as item, index}
			{#if index < 10}
				<span>{item.title}</span>
			{/if}
		{/each}
	</div>
</div>

<style lang="css">
</style>
