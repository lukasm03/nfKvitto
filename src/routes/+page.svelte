<script lang="ts">
	import Login from '$lib/Login.svelte';
	import SkapaNytt from '$lib/SkapaNytt.svelte';
	import { currentUser } from '$lib/pocketbase';
</script>

<Login />

{#if $currentUser}
	<SkapaNytt />
{/if}
