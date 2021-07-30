<script>
  import SvelteBpmn from 'svelte-bpmn';

  import diagramXML from '../resources/diagram.bpmn';

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
  .app {
    padding: 12px;
  }

  h1, .introduction {
    text-align: center;
  }

  .diagram-container {
    height: 400px;
    border: 1px solid grey;
  }
</style>

<div class="app">
  <h1>svelte-bpmn Example</h1>

  <p class="introduction">This example shows how to simply include a bpmn diagram into a Svelte application</p>

  <div class="diagram-container">
    <SvelteBpmn 
      xml={diagramXML} 
      onError={handleDiagramError}
      onLoaded={handleDiagramLoaded} 
      onWarning={handleDiagramWarning}
    />
  </div>

  <p>Vivamus vivamus lectus luctus malesuada curae;. Fringilla Arcu orci sem aenean Eros. Iaculis ac faucibus nam maecenas lectus integer integer penatibus luctus lobortis tristique suspendisse inceptos. Bibendum nostra elit habitant sociosqu praesent viverra. Turpis torquent dolor neque diam blandit. Senectus lorem lacus sociosqu etiam sollicitudin class nonummy rutrum netus sapien sollicitudin lacinia fringilla lacus tempus malesuada et velit. Dis ornare luctus curabitur rhoncus class sagittis consequat porttitor amet parturient. Nam ultrices netus sociosqu molestie porttitor donec torquent interdum erat dolor mi nulla blandit hac egestas hymenaeos ut ultricies ut inceptos sociosqu habitasse varius non. Vitae venenatis cras.</p>

  <p>Massa facilisi consectetuer penatibus odio commodo. Ultrices massa auctor dapibus imperdiet pulvinar torquent id urna. Eget enim senectus pellentesque. Fermentum. Odio. Interdum ultricies litora aenean nonummy dui diam pretium sodales fringilla urna convallis integer nibh mattis dui rutrum vestibulum a. Enim cursus luctus aenean vivamus ac feugiat nulla viverra lacus. Fames. Pharetra velit at. Vestibulum rhoncus class tellus nullam rhoncus ad orci Urna placerat rhoncus ridiculus condimentum quis ante gravida. Elit, neque id venenatis ultrices blandit bibendum ligula gravida nostra eu commodo amet tincidunt. Ut curabitur orci. Ultricies.</p>

  <p>Augue rutrum lectus. Litora, diam. Mollis Elit nostra sollicitudin fermentum sapien non etiam imperdiet rutrum eleifend, molestie nibh ipsum aliquam. Lorem torquent. Nec. Donec elementum dapibus nullam metus iaculis curae; mattis Euismod consequat cubilia. Consequat tortor class ligula neque vulputate. Gravida consectetuer hac ad Diam metus ante gravida consequat ad auctor suspendisse. Fames aenean nunc nullam tincidunt fringilla quisque viverra ligula vivamus, litora natoque nibh erat.</p>

  <p>Elit viverra, maecenas nascetur neque conubia aliquam urna Mus eros pede, integer. Sagittis. Nonummy elementum nisl volutpat lorem nibh ante. Hac in. Justo ad. Parturient. Turpis. Suscipit luctus fames habitant maecenas arcu lorem eros dis blandit Ut dis Justo dictumst hendrerit. Sodales aliquam dictumst varius quam ante Nascetur nonummy sociosqu vulputate nam, potenti augue dolor natoque. Mattis ridiculus lobortis magna ante dolor semper ultrices porttitor imperdiet placerat mus faucibus rutrum consectetuer. Consectetuer proin dignissim est. Fringilla habitasse faucibus enim dapibus pharetra, erat neque interdum. Platea ridiculus turpis cum per. Mattis dolor praesent imperdiet Quam.</p>

  <p>Lorem commodo ridiculus lacinia Morbi nibh viverra Mattis amet curae; conubia Curabitur facilisis leo. Eget porta, magnis augue venenatis convallis posuere vestibulum sollicitudin tristique pharetra hac vitae viverra cubilia torquent scelerisque netus bibendum iaculis laoreet penatibus eros porta. Torquent molestie hendrerit ut rhoncus varius maecenas consectetuer tristique tellus donec. Condimentum donec curabitur vel libero Sit.</p>
</div>


