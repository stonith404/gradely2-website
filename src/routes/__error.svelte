<script lang="ts" context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				errorMessage: error.message
			}
		};
	}
</script>

<script>
	import NotFound from './errors/404.svelte';
	export let status;
	export let errorMessage;
</script>

<section>
	{#if status == 404}
		<NotFound />
	{:else}
		<div class=" align-middle">
			<h2>{status}</h2>
			<p class="text-center">
				<strong>{errorMessage} </strong><br />
			</p>
		</div>
	{/if}
</section>
