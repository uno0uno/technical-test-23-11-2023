<script setup>
const msgsocial = ref('Nuestras redes');
const descriptionWaro = ref(
  'waro colombia conecta a personas que quieren conocer Bogotá con las mejores experiencias culturales de nuestra ciudad según expertos locales'
);


</script>

<template>
  <div class="flex flex-col gap-3 items-start">
        <CommonPublicTheImgLogo />
    <p
      class="
        text-left
        text-normal text-slate-900
        md:w-2/3
        lg:w-2/4
        xl:w-1/2
      "
    >
      {{ descriptionWaro }}
    </p>
  </div>
</template>

<style scoped></style>
