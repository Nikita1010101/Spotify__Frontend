<script lang="ts" setup></script>

<template>
  <div>
    <div class="background"></div>
    <SharedPlayer />
    <div class="grid_template">
      <LayoutSidebar />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  @apply fixed top-0 left-0 right-0 bottom-0 -z-10 bg-imageTertiary blur-lg;
}

.grid_template {
  @apply mb-20 p-10 grid grid-cols-[1fr_5fr] gap-10;
}
</style>
