<script lang="ts">
  import { browser } from "$app/environment";
  import Viewport from "$lib/components/Viewport.svelte";
  import { onMount, onDestroy } from "svelte";
 import { renderBanner, unmountReact} from '$lib/renderReact/renderReact.jsx';
  let bannerContainer

  let backgroundContainer;
  onMount(() => {
    if (bannerContainer) {
    renderBanner(bannerContainer);
    }
  });
   onDestroy(() => {
    if (bannerContainer) {
    unmountReact(bannerContainer);
    }
  });
</script>


  <div bind:this={bannerContainer}></div>
