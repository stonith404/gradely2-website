<script>
	let gradelystars;
	(async () => {
		gradelystars = (await (await fetch('https://api.github.com/repos/generalxhd/gradely2')).json())[
			'stargazers_count'
		];
	})();
</script>

<nav class="navbar  navbar-expand-lg navbar-light">
	<a class="navbar-brand" href="/">
		<img
			src="/img/gradely2logo.png"
			width="50"
			height="50"
			class="d-inline-block align-center"
			alt=""
		/>
		<e class="d-none d-sm-inline d-md-inline">Gradely 2</e>
	</a>
	<div>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<div class="navbar-text">
				<a href="#download">Download</a>
				<a href="https://status.gradelyapp.com">Status</a>
				<a target="_blank" href="https://github.com/generalxhd/gradely2">
					<a href="/home/contact">Contact</a>
					<i class="fab fa-github fa-lg" />
					<id class="d-none d-sm-none d-md-inline small"> {gradelystars ?? '...'} ☆</id>
				</a>
			</div>
		</div>
	</div>
</nav>

<style>
	.navbar-expand-lg {
		justify-content: space-between;
	}
	a {
		text-decoration: none !important;
		color: black;
		margin-right: 40px;
	}
	a:hover {
		text-decoration: none !important;
		color: rgb(58, 58, 58);
	}
	.navbar-brand {
		font-size: 15px;
		margin: 8px;
	}
</style>
