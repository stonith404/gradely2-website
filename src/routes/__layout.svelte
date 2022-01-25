<script>
    import Nav from "./home/components/nav.svelte"
    import Footer from "./home/components/footer.svelte"
</script>
<link rel="stylesheet" href="/global.css">
<div class="mx-3 main">
<Nav/>
    <slot />
</div>
<Footer/>
<style>
    .main{
        min-height: 100% !important;
    }
</style>