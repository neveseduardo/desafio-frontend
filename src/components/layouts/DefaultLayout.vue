<template>
	<div class="dashboard-layout">
		<DefaultNavbar />

		<div class="wrapper">
			<div class="wrapper-container">
				<Transition
					name="fade"
					mode="out-in"
				>
					<RouterView />
				</Transition>
			</div>

			<DefaultFooter />
		</div>
	</div>
</template>

<script setup lang="ts">
</script>
