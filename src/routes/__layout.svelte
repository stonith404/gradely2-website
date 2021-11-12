<script>
    import Nav from "./home/components/nav.svelte"
    import Footer from "./home/components/footer.svelte"
</script>
<link rel="stylesheet" href="/global.css">
<Nav/>
<div class="mx-3">
    <slot />
</div>

<Footer/>
