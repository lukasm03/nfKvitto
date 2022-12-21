<script lang="ts">
    import {currentUser, pb} from "./pocketbase";

    let password: string;
    let username: string;

    async function login(){
        await pb.collection("users").authWithPassword(username, password);
    }

</script>

{#if $currentUser === null}
    <div class="login">
        <form on:submit|preventDefault>
            <input type="text" bind:value={username}/>
            <input type="password" bind:value={password}/>

            <button on:click={login}>Sign in</button> 
        </form>
    </div>
{/if}