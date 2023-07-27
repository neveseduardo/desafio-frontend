<template>
	<div class="app">
		<RouterView name="header" />
		<Transition
			name="fade"
			mode="out-in"
		>
			<RouterView />
		</Transition>
		<RouterView name="footer" />
	</div>
</template>
