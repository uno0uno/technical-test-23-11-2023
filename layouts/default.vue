<template>
  <div class="pb-4">
    <header class=" flex flex-col gap-4 mx-auto py-4 px-4 md:px-16  2xl:px-[30rem]">
      <CommonPublicTheHeader />
    </header>

    <NuxtLoadingIndicator />

    <div class="pb-2 px-4 md:px-16 2xl:px-[30rem]">
      <slot />
    </div>

  </div>
</template>

<script setup>
</script>
