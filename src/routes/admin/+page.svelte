<script lang="ts">
    import Login from "$lib/Login.svelte";
    import Kvitton from "$lib/Kvitton.svelte";
    import { currentUser } from "$lib/pocketbase";
</script>


<Login />

{#if $currentUser}

  <Kvitton />
  
{/if}
