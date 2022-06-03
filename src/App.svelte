<script>
  import Page3DPrint from './lib/Page3DPrint.svelte'
  import Page3DPrintTemplate from './lib/Page3DPrintTemplate.svelte'

  function toCapitalCase(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

  function toCamelCase(name) {
    let [head, ...rest] = name.toLowerCase().split(' ');
    return head + rest.map(toCapitalCase).join(' ');
  }

  class File {
    constructor(directory, name) {
      this.directory = directory;
      this.name = name;
      this.path = `${directory}/${name}`
    }
  }

  class Component {
    constructor(name, description, onshapeLink, installation, partNames = []) {
      this.name = name;
      this.description = description;
      this.onshapeLink = onshapeLink;
      this.installation = installation;
      
      this.nameCamel = toCamelCase(name);
      this.imageFile = new File('images', `${this.nameCamel}.png`);
      this.imageFileDark = new File('images', `${this.nameCamel}Dark.png`);
      this.imageAlt = `3D model of a ${name.toLowerCase()}`;

      this.modelFiles = [];
      if (partNames.length == 0) {
        this.modelFiles.push(new File('models', `${this.nameCamel}.stl`));
      } else {
        for (const partName of partNames) {
          this.modelFiles.push(new File('models', `${this.nameCamel}${toCapitalCase(partName)}.stl`));
        }
      }
    }
  }

  let components = [
        new Component(
            'Soap Holder',
            'A minimal holder for your average bar of soap with channels to drain the water',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/3546675f9ae50ae0061eb3e7',
            'Attach the holder to your shower wall with double-sided tape. Make sure it is fairly level so the soap does not slide off.'
        ),
        new Component(
            'Wall Hook',
            'A small hook to hang anything you wish on the wall',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/a72f3e8bdbb86b67baa30c9f',
            'Gently heat the neck of the hook with a lighter and bend it to your desired angle. Attach it to the wall with double-sided tape.'
        ),
        new Component(
            'Headphone Hanger',
            'A compact hanger for mounting your headphone to the underside of your desk',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/69e14dd8ccba3c344d3d8f90',
            'Attach the hanger to the underside of your desk with double-sided tape.'
        ),
        new Component(
            'Key Holder',
            'A holder with a slot for your laundry card and two magnetic mounts for your keyrings',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/1044263e75bafb7c17756bb8',
            'Obtain two magnets of 12mm diameter and 3mm thickness. Glue each magnet inside its housing making sure that the polarities face the same direction. Mount the holder to the desired location with double-sided tape.'
        ),
        new Component(
            'Adjustable Leg',
            'A sturdy leg with an adjustable height from 90 to 120mm',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/7d293cddbf8a08495b330b33',
            'Attach the leg base to the bottom of your wooden box with three wood screws. Screw in the foot and adjust its height to make your box level.',
            ['base', 'foot']
        ),
        new Component(
            'Shelf Pin',
            'Tightly fits standard 5mm shelf pin holes',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/33a03090788d3cd84cfe53fe',
            'Orient the pin vertically and press it in the desired hole making sure it is fully inserted. Gently tap it in with a hammer if needed.'
        ),
        new Component(
            'Screwdriver Handle',
            'A simple replacement handle for a broken screwdriver',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/05d194e04cc08bc79647bcfd',
            'Remove any remaining plastic pieces from the screwdriver bit. Heat up the handle end of the bit with a torch or lighter. Insert the hot end into the handle using force if necessary.'
        ),
        new Component(
            'Line Vase',
            'A minimal vase with aesthetic lines to complement your decor',
            'https://cad.onshape.com/documents/4a6fedfd17828d4053f78147/w/55b016888ff1f0818db76036/e/8b01b16259f92bea380165ec',
            ''
      )
  ]


  let currentComponent = null;
  let title = '3D Printing'

  function onClick(component) {
    currentComponent = component;
    title = component.name;
  }

  $: document.title = title;
</script>


<div class='body'>
  {#if currentComponent == null}
    <Page3DPrint {components} {onClick}/>
  {:else}
    <Page3DPrintTemplate component={currentComponent}/>
  {/if}
</div>




<style>
  .body {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 3rem 2rem;
    margin-left: auto;
    margin-right: auto;
    color: #1f2937;
  }
</style>
