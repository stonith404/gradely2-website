<script lang="ts">
	import { sdk } from '../../global';
	import { onMount } from 'svelte';

	let password = '';
	let password2 = '';
	let status = '';
	let secret: string;
	let userId: string;
	onMount(() => {
		const UrlParams = new URLSearchParams(window.location.search);
		userId = UrlParams.get('userId');
		secret = UrlParams.get('secret');
	});

	async function updatePassword() {
		let r = '';
		await sdk.account.updateRecovery(userId, secret, password, password2).then(
			(response) => {
				status = 'success';
			},
			(error) => {
				status = error.message;
			}
		);
		return r;
	}
</script>

{#if userId == undefined || secret == undefined}
	<i class="far fa-times-circle icon fa-5x" />
	<p>Invalid link, try again.</p>
{:else if status == ''}
	<h1>Update Password</h1>
	<input
		bind:value={password}
		type="password"
		class="form-control"
		placeholder="New password"
		aria-label="New Password"
	/>

	<input
		bind:value={password2}
		type="password"
		class="form-control mt-3"
		placeholder="Repeat new password"
		aria-label="New Password"
	/>

	<button on:click={() => updatePassword()} class="mt-5">Save</button>
{:else if status == 'success'}
	<i class="far fa-check-circle icon" />
	<p>Your password was changed successfully.</p>
{:else}
	<i class="far fa-times-circle icon" />
	<p>{status}</p>
	<button
		class="button btn-primary mt-3"
		on:click={() => {
			status = '';
		}}>Go back</button
	>
{/if}

<style>
	h1 {
		font-size: 25px;
		margin-bottom: 50px;
	}
	button {
		background-color: black;
		border-radius: 10px;
		color: white;
		padding: 10px;
		border: none;
	}
	button:hover {
		background-color: rgb(65, 65, 65);
		border-radius: 10px;
		border: none;
	}
	input {
		background-color: #f2f2f7;
		border-radius: 10px;
		border: none;
	}
</style>
