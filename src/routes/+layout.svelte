<script>
	import Footer from '$lib/components/Footer/+Footer.svelte';
	import Header from '$lib/components/Header/+Header.svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header />
<slot />
<Footer />
