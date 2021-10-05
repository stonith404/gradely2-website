<script>
	import Router from "svelte-spa-router";
	import Home from "./routes/home.svelte";
	import Header from "./components/nav.svelte";
	const routes = {
		"/": Home,
		// "*": NotFound,
	};
</script>
<Header/>
<Router {routes} />