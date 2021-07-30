<script>
  import {
    onDestroy,
    onMount
  } from 'svelte';

  import BpmnModeler from 'bpmn-js/lib/Modeler';

  const noop = () => {};

  export let xml = '';
  export let onError = noop;
  export let onLoaded = noop;
  export let onWarning = noop;

  let container;
  let modeler;
  

  onMount(async () => {
    modeler = new BpmnModeler({
      container: container,
      keyboard: { bindTo: document }
    });

    modeler.on('import.done', event => {
      const {
        error,
        warnings
      } = event;

      if (error) {
        return onError(error);
      }

      if (warnings && warnings.length) {
        onWarning(warnings);
      }

      const canvas = modeler.get('canvas');
      canvas.zoom('fit-viewport');

      return onLoaded(event);
    });
  });

  onDestroy(() => {
    modeler.destroy();
  });

  // re-import diagram whenever xml changes
  $: modeler && modeler.importXML(xml);
</script>

<div 
  class="svelte-bpmn-container" 
  style="height: 100%; width: 100%" 
  bind:this={container}>
</div>
