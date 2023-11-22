<script>
  import { useUser } from "$lib";
  import Logo from "$lib/components/Logo.svelte";

  const user = useUser();
  import { onMount, onDestroy } from 'svelte';
  import { renderHeader, renderHeadlights, renderBackground, unmountReact } from '$lib/renderReact/renderReact.jsx';
  
  let container; 
  let headlightsContainer;
  let backgroundContainer;
  onMount(() => {
    if (headlightsContainer) {
    renderHeadlights(headlightsContainer);
    }
    if (backgroundContainer) {
      renderBackground(backgroundContainer);
    }
    if (container) {
      renderHeader(container, $user);
    }
  });

    onDestroy(() => {
      if (backgroundContainer) {
      unmountReact(backgroundContainer);    
    }
      if (headlightsContainer) {
     unmountReact(headlightsContainer);   
    }  
      if (container) {
      unmountReact(container);
    }
  });

   
</script>
<div bind:this={backgroundContainer}></div>
<div bind:this={headlightsContainer}></div>
<div bind:this={container}></div>
<slot />
