<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let className = "";
  export let style = "";
  export { className as class };
  export let intersecting = true;
  export let animate = true;
  export let oneWay = false;
  export let once = false;
  export let threshold = 0;
  export let el = "div";

  let intersectedOnce = false;

  $: bot = browser
    ? !!navigator.userAgent.match(
        "Lighthouse|Google Page Speed Insights|Googlebot"
      )
    : true;

  onMount(() => {
    intersecting = false;
  });

  const viewport = (node: HTMLDivElement) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (oneWay && entries[0].boundingClientRect.y < 0) {
          if (!intersecting) {
            intersecting = true;
          }
          return;
        }
        if (!intersectedOnce) {
          intersecting = entries[0].isIntersecting;
        }
        if (once && intersecting) {
          intersectedOnce = true;
        }
      },
      { threshold }
    );
    observer.observe(node);
    return {
      destroy: () => {
        observer.unobserve(node);
      },
    };
  };
</script>

{#if animate}
  <svelte:element
    this={el}
    class="viewport {className}"
    use:viewport
    class:intersecting
    class:bot
    {style}
  >
    <slot {intersecting} />
  </svelte:element>
{:else}
  <svelte:element
    this={el}
    class="viewport {className}"
    class:intersecting={true}
    {style}
  >
    <slot {intersecting} />
  </svelte:element>
{/if}

<style>
  .viewport {
    --anim-x: var(--a-x, 0);
    --anim-y: var(--a-y, 0);
    --anim-s: var(--a-s, 1);
    --anim-s-x: var(--a-s-x, var(--anim-s));
    --anim-s-y: var(--a-s-y, var(--anim-s));
    --anim-r: var(--a-r, 0deg);
    --anim-r-x: var(--a-r-x, 0deg);
    --anim-r-y: var(--a-r-y, 0deg);
    --anim-t: var(--a-t, 0.8s);
    --anim-d: var(--a-d, 0s);
  }
  .viewport :global(.anim),
  .viewport:global(.anim) {
    will-change: transform;
    transition: transform var(--anim-t) var(--anim-d),
      opacity var(--anim-t) var(--anim-d);
  }

  .viewport:not(.intersecting) :global(.anim),
  .viewport:not(.intersecting):global(.anim) {
    transition: transform var(--anim-t) 0s, opacity var(--anim-t) 0s;
    opacity: 0;
    transform: scale3d(var(--anim-s-x), var(--anim-s-y), 0)
      translate3d(var(--anim-x), var(--anim-y), 0) rotateX(var(--anim-r-x))
      rotateY(var(--anim-r-y)) rotateZ(var(--anim-r));
  }

  .viewport:not(.intersecting) :global(.anim:not(.animOut)),
  .viewport:not(.intersecting):global(.anim:not(.animOut)) {
    transition: transform 0s 0s, opacity 0s 0s !important;
  }

  .viewport.bot :global(.anim),
  .viewport.bot:global(.anim) {
    transition: transform 0s 0s, opacity 0s 0s !important;
  }
</style>
