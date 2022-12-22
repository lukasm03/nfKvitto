<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import { pb } from '$lib/pocketbase';
    import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    let visaQr: boolean = false;
    let kvitto: any = {};

   onMount(async () => {
		kvitto = await pb.collection('kvitton').getOne(data.kvitto.id);
	});
</script>

{#if !visaQr}
    <div class="huvudStilen">
        <div class="knappStilen">
            <button on:click={() =>  {goto('/admin')}}>Tillbaka till admin</button>
            <button on:click={() => console.log(kvitto.id)}>Ta bort kvitto</button>
            <button on:click={() => visaQr = true}>Visa QR-kod</button>
        </div>
        <div class="divByt">
            <div>
                <label class="pekare">
                    <img
                    src={`https://nfkvitton.fly.dev/api/files/kvitton/${kvitto.id}/${kvitto.bild}?thumb=120x150`}
                    alt={'bild på kvittot'}
                    width={120}
                    height={150}
                    loading={'lazy'}
                />
                <input type="file" name="Bild" class="hide" />
                </label>
            </div>
            <form class="formStilen">
                <label>
                    Namn på köpet:
                    <input  type="text" name="Vara" value={kvitto.vara} />
                </label>
                <label>
                    Pris på köpet:
                    <input type="number" name="Pris" value={kvitto.pris} />
                </label>
                <label>
                    Kategori på köpet:
                    <select  name="Kategori" value={kvitto.kategori}>
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
                    <input  type="date" name="Datum" value={kvitto.datum} />
                </label>
                <label>
                    Swish-nummer:
                    <input  type="tel" name="Swish" value={kvitto.swish} />
                </label>
                <label>
                    Fixad:
                    <input type="checkbox" name="Fixad" checked={kvitto.fixad} />
                </label>
                <label>
                    Typ av köp:
                    <select  name="Typavköp" value={kvitto.typavkop}>
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