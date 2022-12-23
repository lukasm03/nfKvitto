<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let kvitton: any[] = [];
	let visa: string = "alla";

	onMount(async () => {
		const kvittoLista = await pb.collection('kvitton').getFullList(20, {
			sort: '-datum',
		});
		kvitton = kvittoLista;
	});
</script>

<div class="filterStilen">
	<button name="visaalla" value="alla" on:click={() => visa = "alla"}>Visa alla
	</button>
	<button name="visaintefixade" value="intefixade" on:click={() => visa = "inteFixade"}>Visa inte
	  fixade
	</button>
	<button name="visaintäkter" value="visaintäkter" on:click={() => visa = "Intäkt"}>Visa intäkter
	</button>
	<button name="visautgifter" value="visautgifter" on:click={() => visa = "Avgift"}>Visa avgifter
	</button>
  </div>
<div class="kvittoHuvud">
	{#each kvitton as kvitto  (kvitto.id)}
		{#if visa == "alla" ? true : 
		visa == "inteFixade" ? kvitto.fixad === false : 
		visa == "Intäkt" ? kvitto.typavkop === "Intäkt" : 
		visa == "Avgift" ? kvitto.typavkop === "Avgift" : 
		false}
			<div class="kvittoStil">
				<div class="kvittoBild">
					<a href={`/admin/${kvitto.id}`}>
						<img
							src={`http://139.162.135.17:80/api/files/kvitton/${kvitto.id}/${kvitto.bild}?thumb=80x80`}
							alt={'bild på kvittot'}
							width={80}
							height={80}
							loading={'lazy'}
						/>
					</a>
				</div>
				<div class="kvittoText">
					<p class="kvittoDetaljer">Namn på {kvitto.typavkop.toLocaleLowerCase()}en: {kvitto.vara}</p>
					<p class="kvittoDetaljer">Summa på {kvitto.typavkop.toLocaleLowerCase()}en: {kvitto.pris}kr</p>
					<p class="kvittoDetaljer">Kategori på {kvitto.typavkop.toLocaleLowerCase()}en: {kvitto.kategori}</p>
					<p class="kvittoDetaljer">Datum {kvitto.typavkop.toLocaleLowerCase()}en skedde: {kvitto.datum.slice(0, 10)}</p>
					<p class="kvittoDetaljer">Swish-nummer: {kvitto.swish}</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.filterStilen {
		margin-top: 0.5vh;
		display: flex;
		justify-content: center;
	}
	.kvittoHuvud {
		display: flex;
		flex-direction: column;
		width: 400px;
		margin: 0 auto;
		}
	.kvittoStil {
		display: flex;
		align-items: center;
		margin-bottom: 1vh;
		max-width: 400px;
	}
    .kvittoText{
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
	.kvittoBild {
		margin: 0.5vw;
	}
	.kvittoDetaljer {
		margin: 0vw;
	}
</style>
