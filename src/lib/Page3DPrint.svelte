<script>
  import Card from './Card.svelte'

  export let components;
  export let onClick;
</script>


<h1 class='title'>3D Printing</h1>
<div class='grid'>
  {#each components as component}
    <Card {component} onClick={() => onClick(component)}/>
  {/each}
</div>


<style>
  .title {
    padding-bottom: 2.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 4rem;
    row-gap: 5rem;
  }
</style>