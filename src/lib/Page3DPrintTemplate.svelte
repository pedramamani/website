<script>
  export let component;
</script>


<div class='main'>
  <div class='content'>
      <h1 class='title'>{component.name}</h1>
      <div class='line'>
          <div class='chip description'>Description</div>
          <p>{component.description}</p>
      </div>
      <div class='line {component.installation ? '': 'hidden'}'>
          <div class='chip installation'>Installation</div>
          <p>{component.installation}</p>
      </div>
      <div class='line'>
          <div class='chip documents'>Documents</div>
          {#each component.modelFiles as modelFile}
              <a class='link' href={modelFile.path} download>{modelFile.name}</a>
          {/each}
          <a class='link' href={component.onshapeLink} target='_blank' rel='noopener noreferrer'>Onshape</a>
      </div>
      <div class='spacer'/>
  </div>
  <img class='image' src={component.imageFile.path} alt={component.imageAlt}>
</div>


<style>
  .title {
      padding-bottom: 2.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 500;
  }

  .chip {
    height: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 9999px;
  }

  .description {
    background-color: #a5f3fc;
    color: #0e7490;
  }

  .installation {
    background-color: #f5d0fe;
    color: #a21caf;
  }

  .documents {
    background-color: #a7f3d0;
    color: #047857;
  }

  .image {
    height: 20rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  .spacer {
    height: 5rem;
  }

  .main {
    display: flex;
    gap: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 36rem;
  }

  .line {
    display: flex;
    gap: 1rem;
  }

  .link {
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
  }

  .hidden {
    display: none;
  }
</style>