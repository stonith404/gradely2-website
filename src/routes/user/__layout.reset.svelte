<script>
	import Header from './components/header.svelte';
</script>

<link rel="stylesheet" href="/global.css" />
<div class="body">
	<Header />
	<div class="d-flex justify-content-center align-items-center h-75 mx-2">
		<div class="content-container col-lg-4 col-md-8 col-sm-8 col-12 text-center">
			<slot />
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f2f2f7;
	}
	.body {
		height: 90vh;
	}
</style>
