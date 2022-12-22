<script lang="ts">
    import { pb } from '$lib/pocketbase';

    let vara: string;
    let pris: number;
    let datum: Date;
    let bild: FileList;
    let kategori: string = "Laborationer";
    let swish: string;
    let typavkop: string = "Avgift";
    let skickat: boolean = false;
    let formData: FormData = new FormData();

    async function skickaKvitto() {
        formData.append("vara", vara);
        formData.append("pris", pris.toString());
        formData.append("datum", datum.toString());
        formData.append("bild", bild[0]);
        formData.append("kategori", kategori);
        formData.append("swish", swish);
        formData.append("typavkop", typavkop); 
        try {
            skickat = true;  
            await pb.collection("kvitton").create(formData);
        }
        catch (error) {
            console.log(error);
            skickat = false
        }
        setTimeout(() => {
            skickat = false;
        }, 3000);
        //reset all values
        vara = "";
        pris = "" as any;
        datum = "" as any;
        bild = undefined as any;
        swish = "";
    }
    

</script>

<div class="knapparStilen">
    <button name="typavkop" on:click={() => typavkop = 'Avgift'}>Avgifter
    </button>
    <button name="typavkop" on:click={() => typavkop = 'Intäkt'}>Intäkter
    </button>
  </div>
<div class="huvudContainer">
    <form class="formStilen" on:submit|preventDefault={skickaKvitto}>
        <label for="Kategori">Kategori på {typavkop.toLocaleLowerCase()}en:</label>
        <select class="selectStilen" bind:value={kategori} id="Kategori">
          <option value="Laborationer">Laborationer</option>
          <option value="Medlemsavgifter">Medlemsavgifter</option>
          <option value="Kök&fester">Kök & fester</option>
          <option value="Försäljning">Försäljning</option>
          <option value="NF-artiklar">NF-artiklar</option>
          <option value="Övrigt">Övrigt</option>
        </select>
        <label for="Vara">Vara:</label>
        <input type="text" bind:value={vara} id="Vara" />
        <label for="Pris">Pris:</label>
        <input type="number" bind:value={pris} id="Pris" />
        <label for="Bild">Bild:</label>
        <input type="file" bind:files={bild} accept={"image/*"} id="Bild" />
        <label for="Datum">Datum:</label>
        <input type="date" bind:value={datum} placeholder={Date.now().toString()} id="Datum" />
        <label for="Swish">Swish-nummer:</label>
        <input type="tel" bind:value={swish} id="Swish" />
        <button type="submit">Skicka in kvitto</button>
        <p>{skickat === false ? "" : "Kvitto skickat"}</p>
      </form>
</div>


<style>
    .huvudContainer {
        display: flex;
        justify-content: center;
    }
    .knapparStilen{
        display: flex;
        justify-content: center;
    }
    .formStilen{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 62vw;
    }
    .selectStilen{
        min-width: 120px;
        max-width: 6vw;
    }
    label {
        margin-top: 1vh;
        width: fit-content;
    }
    button {
        margin-top: 2vh;
        width: fit-content;
    }
    input {
        width: auto;
    }
    

</style>