<script lang="ts">
	import { linear } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div transition:fly={{ y: 100, duration: 500, easing: linear }}>
	<a href="/"> <h1 class="text-3xl text-center center-text">About Me</h1></a>
</div>

<style lang="css">
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.center-text {
		text-align: center;
		font-size: 2rem;
		padding: 10px;
		background-color: green;
		color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	@keyframes cubicInOut {
		0% {
			transform: translateY(-10px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
