<script lang="ts">
    import Login from "$lib/Login.svelte";
    import SkapaNytt from "$lib/SkapaNytt.svelte";   
    import { currentUser } from "$lib/pocketbase";
</script>


<svelte:head>
	<title>NF Kvitton</title>
	<html lang="se" />
</svelte:head>
<Login />

{#if $currentUser}

  <SkapaNytt />
  
{/if}
