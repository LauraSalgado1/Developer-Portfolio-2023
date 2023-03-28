<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
useHead({
  title: null,
  titleTemplate: (pagename) =>
    pagename
      ? `${pagename} - Laura Salgado | Developer`
      : "Laura Salgado | Developer",
  link: [
    { rel: "icon", type: "image/x-icon", href: `/favicon.ico` },
    {
      rel: "stylesheet",
      href: "googlefontsurlhere",
    },
  ],
});
</script>
