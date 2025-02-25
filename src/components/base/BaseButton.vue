
<script setup lang="ts">

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button class="bg-blue-500 text-white p-2 rounded-md" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

