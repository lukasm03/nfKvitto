<script lang="ts">
    import {currentUser, pb} from "./pocketbase";

    let password: string;
    let username: string;

    async function login(){
        await pb.collection("users").authWithPassword(username+"konto", password);
    }

</script>

{#if $currentUser === null}
    <div class="login">
        <form on:submit|preventDefault={login} class="formStilen">
            <label for="username">Användarnamn:</label>
            <input id="username" type="text" bind:value={username}/>
            <label for="password">Lösenord:</label>
            <input id="password" type="password" bind:value={password}/>
            <button type="submit" class="buttonStilen">Logga in</button> 
        </form>
    </div>
{/if}

<style>
    .formStilen{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 62vw;
    }
    .login{
        display: flex;
        justify-content: center;
    }
    .buttonStilen{
        width: fit-content;
        margin-top: 2vh;
    }
</style>