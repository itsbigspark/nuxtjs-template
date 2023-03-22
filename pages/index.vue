<template>
  <p class="text-lg font-bold">
    {{ data.name }}
  </p>
  <my-component />
</template>
<script setup lang="ts">
const data = reactive({
  name: "hello there"
})
</script>