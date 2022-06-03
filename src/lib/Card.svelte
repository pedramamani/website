<script>
  export let component;
  export let onClick;
</script>

<div class='card'>
    <p class='title'>{component.name}</p>
    <div class='imageWrapper' on:click={onClick}>
      <img class='image' src={component.imageFile.path} alt={component.imageAlt}>
    </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.75rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .title {
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;
  }

  .imageWrapper {
    width: 100%;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  .imageWrapper:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .image {
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>