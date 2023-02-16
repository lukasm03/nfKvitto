<script lang="ts">
	import LoggaHeader from '$lib/LoggaHeader.svelte';
</script>

<LoggaHeader />

<slot />

<style>
	slot {
		margin: 0;
		height: 100%;
		overflow: hidden;
	}
</style>
