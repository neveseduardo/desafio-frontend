<template>
	<div class="error-page not-found">
		<div class="error-content">
			<div class="icon">
				<CustomIcon
					class="text-5xl"
					icon="ic:baseline-error-outline"
				/>
			</div>
			<div class="content flex flex-col gap-4">
				<h1>[Erro: 404]. Ops! A página não foi encontrada.</h1>
				<a
					class="text-blue-400"
					href="#"
					@click.stop.prevent="$router.push({ path: '/' })"
				>
					Retornar para a página principal
				</a>
			</div>
		</div>
	</div>
</template>
