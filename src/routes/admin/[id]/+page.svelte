<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import { pb } from '$lib/pocketbase';
    import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    let visaQr: boolean = false;
    let kvitto: any = {};
    let bild: string;
    let formData: FormData = new FormData();


   onMount(async () => {
		kvitto = await pb.collection('kvitton').getOne(data.kvitto.id);
        bild = `https://nfkvitton.fly.dev/api/files/kvitton/${kvitto.id}/${kvitto.bild}?thumb=120x150`
	});

    async function taBortKvitto() {
        await pb.collection('kvitton').delete(data.kvitto.id);
        goto('/admin');
    }
    async function updateraBild(bilden: (Event & { currentTarget: EventTarget & HTMLInputElement; })){
        bild = (URL.createObjectURL(bilden.currentTarget.files![0]));
        kvitto.bild = bilden.currentTarget.files![0];
    }
    async function updateraKvitto() {
        formData.append("vara", kvitto.vara);
        formData.append("pris", kvitto.pris.toString());
        formData.append("datum", kvitto.datum.toString());
        formData.append("bild", kvitto.bild);
        formData.append("kategori", kvitto.kategori);
        formData.append("swish", kvitto.swish);
        formData.append("fixad", kvitto.fixad);
        formData.append("typavkop", kvitto.typavkop); 
        await pb.collection('kvitton').update(data.kvitto.id, formData);
        goto('/admin');
    }

</script>

{#if !visaQr}
    <div class="huvudStilen">
        <div class="knappStilen">
            <button on:click={() =>  {goto('/admin')}}>Tillbaka till admin</button>
            <button on:click={() => taBortKvitto()}>Ta bort kvitto</button>
            <button on:click={() => visaQr = true}>Visa QR-kod</button>
        </div>
        <div class="divByt">
            <div>
                <label class="pekare">
                    <img
                    src={bild}
                    alt={'bild på kvittot'}
                    width={120}
                    height={150}
                    loading={'lazy'}
                />
                <input on:input={(e)=>updateraBild(e)} type="file" name="Bild" class="hide" />
                </label>
            </div>
            <form on:submit|preventDefault={updateraKvitto} class="formStilen">
                <label>
                    Namn på köpet:
                    <input  type="text" name="Vara" bind:value={kvitto.vara} />
                </label>
                <label>
                    Pris på köpet:
                    <input type="number" name="Pris" bind:value={kvitto.pris} />
                </label>
                <label>
                    Kategori på köpet:
                    <select  name="Kategori" bind:value={kvitto.kategori}>
                        <option value="Laborationer" name="Laborationer">Laborationer</option>
                        <option value="Medlemsavgifter" name="Medlemsavgifter">Medlemsavgifter</option>
                        <option value="Kök&fester">Kök & fester</option>
                        <option value="Försäljning">Försäljning</option>
                        <option value="NF-artiklar">NF-artiklar</option>
                        <option value="Övrigt">Övrigt</option>
                    </select>
                </label>
                <label>
                    Datum köpet skedde:
                    <input  type="date" name="Datum" bind:value={kvitto.datum} />
                </label>
                <label>
                    Swish-nummer:
                    <input  type="tel" name="Swish" bind:value={kvitto.swish} />
                </label>
                <label>
                    Fixad:
                    <input type="checkbox" name="Fixad" bind:checked={kvitto.fixad} />
                </label>
                <label>
                    Typ av köp:
                    <select  name="Typavköp" bind:value={kvitto.typavkop}>
                        <option value="Avgift" name="Avgift">Avgift</option>
                        <option value="Intäkt" name="Intäkt">Intäkt</option>
                    </select>
                </label>
                <button class="skickaKnapp" type="submit">Spara ändringar</button>
            </form>
        </div>

    </div>
{:else}
    <div class="huvudStilen">
        <div class="knappStilen">
            <button on:click={() =>  {goto('/admin')}}>Tillbaka till admin</button>
            <button on:click={() => visaQr = false}>Forsätt redigera kvitto</button>
        </div>
    </div> 
{/if}


<style>
    .huvudStilen{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .knappStilen{
        align-self: center;
        text-align: center;
        margin-bottom: 3vh;
    }
    .divByt{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .pekare{
        cursor: pointer;
    }
    .hide{
        display: none;
    }
    .formStilen{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1vw;
    }
    .skickaKnapp{
        width: fit-content;
        margin-top: 3vh;
    }
</style>