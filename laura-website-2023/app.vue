<template>
  <div>
    <SeoKit />
    <NuxtLayout />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: "icon", type: "image/x-icon", href: `/favicon.ico` },
    {
      rel: "stylesheet",
      href: "googlefontsurlhere",
    },
  ],
});
</script>
