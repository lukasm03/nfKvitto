<script lang="ts">
	import Login from '$lib/Login.svelte';
	import Kvitton from '$lib/Kvitton.svelte';
	import { currentUser } from '$lib/pocketbase';
</script>

<Login />
<svelte:head>
	<title>Admin för NF-Kvitton</title>
	<html lang="se" />
</svelte:head>
{#if $currentUser}
	<Kvitton />
{/if}
