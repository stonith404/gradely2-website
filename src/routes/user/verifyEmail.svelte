<script lang="ts">
	import Loading from './components/loading.svelte';
	import { sdk } from '../../global';
	import { onMount } from 'svelte';
	let userId;
	let secret;

	async function verifyEmail() {
		const UrlParams = new URLSearchParams(window.location.search);
		userId = UrlParams.get('userId');
		secret = UrlParams.get('secret');

		let r;
		await sdk.account.updateVerification(userId, secret).then(
			(response) => {
				r = 'success';
			},
			(error) => {
				r = error.message;
			}
		);
		return r;
	}
</script>

{#await verifyEmail()}
	<Loading />
{:then value}
	{#if value == 'success'}
		<i class="far fa-check-circle icon" />
		<p class="mb-2">Your email is verified</p>
	{:else if userId == undefined || secret == undefined}
		<i class="far fa-times-circle icon fa-5x" />
		<p>Invalid link, try again.</p>
	{:else}
		<i class="far fa-times-circle icon fa-5x" />
		<p>{value}</p>
	{/if}
{/await}
