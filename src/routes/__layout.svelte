<script>
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>Gradely 2</title>
</svelte:head>
<link rel="stylesheet" href="/global.css" />
<div class="mx-3 main">
	<Nav />
	<slot />
</div>
<Footer />

<style>
	.main {
		min-height: 100% !important;
	}
</style>
