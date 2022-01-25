<script>
	import { sdk } from '../../global';

	let email = '';
	let message = '';
	let messageStatus = 'pending';

	async function sendMail() {
		if (email != '' && message != '')
			try {
				await sdk.functions.createExecution(
					'fcn_contact',
					JSON.stringify({ sender: email, message: message })
				);
				messageStatus = 'success';
			} catch (_) {
				messageStatus = 'error';
			}
	}
</script>

<div class="d-flex justify-content-center mt-5">
	{#if messageStatus != 'pending'}
		<div class="col-lg-5 col-md-6 col-sm-8 col-12 text-center">
			<h2>{messageStatus == 'error' ? 'Error' : 'Thanks'}</h2>
			<p>
				{messageStatus == 'error'
					? 'There was an error 😒. You also can contact me with elias@eliasschneider.com.'
					: 'Your message was sent successfully 😄.'}
			</p>
			<a class="btn btn-primary mt-3 mb-5" href="/">Back to home</a>
		</div>
	{:else}
		<form class="col-lg-5 col-md-6 col-sm-8 col-12" on:submit|preventDefault={() => sendMail()}>
			<div class="mb-4">
				<label for="emailInput" class="form-label">✉️ Your email</label>
				<input
					type="email"
					bind:value={email}
					class="form-control"
					id="emailInput"
					placeholder="name@example.com"
					required
				/>
			</div>
			<div class="mb-3">
				<label for="messageInput" class="form-label">💬 Your message</label>
				<textarea bind:value={message} class="form-control" id="messageInput" rows="5" required />
			</div>
			<div class="text-center mt-4 mb-5">
				<button class="btn btn-primary">Send</button>
			</div>
		</form>
	{/if}
</div>

<style>
	.form-control {
		border: none;
		background-color: #f5f5fa;
		border-radius: 8px;
	}
</style>
