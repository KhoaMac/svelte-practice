<script lang="ts">
	import type { IMenu } from '../../../interface/IMenu';
	import { page } from '$app/stores';

	const menuArr: IMenu[] = [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'About',
			url: '/about'
		}
	];
</script>

<div class="bg-gray-200 w-ful flex justify-between items-center h-[100px] px-10">
	<div>Logo</div>
	<header>
		<nav class="links flex relative justify-evenly gap-[2rem]">
			{#each menuArr as { title, url }}
				{@const active = $page.url.pathname === url ? 'page' : null}
				<a aria-current={active} href={url} class="relative">{title}</a>
			{/each}
		</nav>
	</header>
	<div>
		<button>Login</button>
	</div>
</div>

<style lang="css">
	header {
		max-width: 400px;
		margin-inline: auto;
		view-transition-name: header;
	}

	nav a {
		transition: color 0.3s ease;

		&[aria-current='page'],
		&:hover {
			color: #ff4400;
		}
	}
	a[aria-current='page']::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		top: 30px;
		left: 0;
		border: 2px solid;
		border-top: var(--size) solid #ff4400;
		view-transition-name: active-page;
	}
</style>
