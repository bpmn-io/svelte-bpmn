# svelte-bpmn

[![CI](https://github.com/bpmn-io/svelte-bpmn/workflows/CI/badge.svg)](https://github.com/bpmn-io/svelte-bpmn/actions?query=workflow%3ACI)

Embed and edit BPMN 2.0 diagrams in your [Svelte](https://svelte.dev/) app - powered by [bpmn-js](https://github.com/bpmn-io/bpmn-js).


## Installation

```sh
npm install --save svelte-bpmn
```

## Usage

```svelte
<script>
  import SvelteBpmn from 'svelte-bpmn';

  const diagram = '..'; // import your BPMN 2.0 XML here

  const handleDiagramLoaded = () => {
    console.log('Diagram successfully loaded!');
  };

  const handleDiagramError = (error) => {
    console.log('Diagram import resolved in errors: ', error);
  };

  const handleDiagramWarning = (warnings) => {
    console.log('Diagram import warnings: ', warnings);
  };
</script>

<style>
  .diagram-container {
    height: 700px;
    border: 1px solid grey;
  }
</style>

<div class="diagram-container">
  <SvelteBpmn 
    xml={diagram} 
    onError={handleDiagramError}
    onLoaded={handleDiagramLoaded} 
    onWarning={handleDiagramWarning}
  />
</div>
```

Checkout the [example](./example) to get further information.

## Additional Resources

* [bpmn-js Examples](https://github.com/bpmn-io/bpmn-js-examples)
* [bpmn-js Viewer Documentation](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Viewer.js), [Example](https://github.com/bpmn-io/bpmn-js-examples/blob/master/starter/viewer.html)
* [bpmn-js Modeler Documentation](https://github.com/bpmn-io/bpmn-js/blob/master/lib/Modeler.js), [Example](https://github.com/bpmn-io/bpmn-js-examples/tree/master/modeler)

## License

MIT