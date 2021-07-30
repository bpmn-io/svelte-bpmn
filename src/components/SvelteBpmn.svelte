<script>
  import {
    onDestroy,
    onMount
  } from 'svelte';

  import BpmnViewer from 'bpmn-js/lib/Viewer';

  const noop = () => {};

  export let xml = '';
  export let onError = noop;
  export let onLoaded = noop;
  export let onWarning = noop;

  let container;
  let viewer;
  

  onMount(async () => {
    viewer = new BpmnViewer({
      container: container,
      keyboard: { bindTo: document }
    });

    viewer.on('import.done', event => {
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

      const canvas = viewer.get('canvas');
      canvas.zoom('fit-viewport');

      return onLoaded(event);
    });
  });

  onDestroy(() => {
    viewer.destroy();
  });

  // re-import diagram whenever xml changes
  $: viewer && viewer.importXML(xml);
</script>

<div 
  class="svelte-bpmn-container" 
  style="height: 100%; width: 100%" 
  bind:this={container}>
</div>
