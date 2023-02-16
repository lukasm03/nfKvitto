<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let skapaExcelArk: any;
	let kvitton: any[] = [];
	let visa = 'alla';

	onMount(async () => {
		kvitton = await pb.collection('kvitton').getFullList(20 /* batch size */, {
			sort: '-datum'
		});
		skapaExcelArk = (await import(`./excel`)).default; // this will work
	});
</script>

<span class="spanStilen">
	<button class="excelKnapp" on:click={() => skapaExcelArk(kvitton)}> Exportera till excel </button>
</span>
<div class="filterStilen">
	<button name="visaalla" value="alla" on:click={() => (visa = 'alla')}>Visa alla </button>
	<button name="visaintefixade" value="intefixade" on:click={() => (visa = 'inteFixade')}
		>Visa inte fixade
	</button>
	<button name="visaintäkter" value="visaintäkter" on:click={() => (visa = 'Intäkt')}
		>Visa intäkter
	</button>
	<button name="visautgifter" value="visautgifter" on:click={() => (visa = 'Avgift')}
		>Visa avgifter
	</button>
</div>
<div class="kvittoHuvud">
	{#each kvitton as kvitto (kvitto.id)}
		{#if visa == 'alla' ? true : visa == 'inteFixade' ? kvitto.fixad === false : visa == 'Intäkt' ? kvitto.typavkop === 'Intäkt' : visa == 'Avgift' ? kvitto.typavkop === 'Avgift' : false}
			<div class="kvittoStil">
				<div class="kvittoBild">
					<a href={`/admin/${kvitto.id}`}>
						<img
							src={`https://nfdatabas.fly.dev/api/files/kvitton/${kvitto.id}/${kvitto.bild}?thumb=100x100`}
							alt={'bild på kvittot'}
							width={80}
							height={80}
							loading={'lazy'}
						/>
					</a>
				</div>
				<div class="kvittoText">
					<p class="kvittoDetaljer">
						Namn på {kvitto.typavkop.toLocaleLowerCase()}en: {kvitto.vara}
					</p>
					<p class="kvittoDetaljer">
						Summa på {kvitto.typavkop.toLocaleLowerCase()}en: {kvitto.pris}kr
					</p>
					<p class="kvittoDetaljer">
						Kategori på {kvitto.typavkop.toLocaleLowerCase()}en: {kvitto.kategori}
					</p>
					<p class="kvittoDetaljer">
						Datum {kvitto.typavkop.toLocaleLowerCase()}en skedde: {kvitto.datum.slice(0, 10)}
					</p>
					<p class="kvittoDetaljer">Swish-nummer: {kvitto.swish}</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.spanStilen {
		display: flex;
		justify-content: center;
		color: #001f3f;
	}
	.excelKnapp {
		justify-content: center;
		color: #001f3f;
	}
	.filterStilen {
		margin-top: 0.5vh;
		display: flex;
		justify-content: center;
		color: #001f3f;
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
		color: #001f3f;
	}
	.kvittoText {
		display: flex;
		flex-direction: column;
		width: fit-content;
		color: #001f3f;
	}
	.kvittoBild {
		margin: 0.5vw;
	}
	.kvittoDetaljer {
		margin: 0vw;
		color: #001f3f;
	}
</style>
