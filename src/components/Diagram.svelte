<script>
  import { onMount } from 'svelte';

  import BpmnModeler from 'bpmn-js/lib/Modeler';

  const noop = () => {};


  onMount(async () => {
    const modeler = new BpmnModeler({
      container: '#canvas',
      keyboard: { bindTo: document }
    });

    modeler.importXML(xml, error => {

      if (error) {
        console.error(error);
        return;
      }

      const canvas = modeler.get('canvas');

      canvas.zoom('fit-viewport');

      onDiagramLoaded();
    });

  });

  export let xml = '';

  export let onDiagramLoaded = noop;
</script>

<style>
  #canvas {
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>

<div id="canvas">
</div>
