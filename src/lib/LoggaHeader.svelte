<script lang="ts">
      import logo from "../loggan.jpg";
</script>

<div class="huvud">
      <img
        alt="nf logga"
        src={logo}
        width="200px"
        class="huvudBild"
      />
    <h1 class="huvudText">NF KVITTON</h1>
</div>

<style>
    .huvud{
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-self: center;
        margin-top: 4vh;
        margin-bottom: 0px;
    }
    .huvudBild{
        margin: '0 auto';
        align-self: center; 
    }
    .huvudText{
        margin: 1vh;
        align-self: center;
    }
</style>