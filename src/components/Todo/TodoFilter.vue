<template>
  <div class="flex gap-2 items-center">
    filters
    <BaseButton>All</BaseButton>
    <BaseButton>Active</BaseButton>
    <BaseButton>Completed</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../Base/BaseButton.vue";
</script>
