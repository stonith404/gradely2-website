<script>
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
</script>

<svelte:head>
	<title>Gradely 2</title>
</svelte:head>

<Nav/>
<div class="mx-3">
    <slot />
</div>

<Footer/>
