<script setup></script>

<template>
  <nav class="bg-white z-20 top-0 border-b-2 pb-2">
    <div
      class="
        flex
        sm:items-center
        justify-between
        mx-auto
        gap-2
      "
    >
      <div
        class="
          flex
          justify-start
          items-center
          gap-2
          text-4xl
          text-lg text-black
          font-extrabold
        "
      >
        <div class="cursor-pointer">
          <NuxtLink :to="{ path: `/` }">
            Tu Lista
          </NuxtLink>
        </div>
      </div>
      <div class="flex  sm:gap-2 gap-1">
        <CommonPublicTheNewTodo ></CommonPublicTheNewTodo>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
