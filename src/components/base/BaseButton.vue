
<script setup lang="ts">

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <button class="bg-[#323232] text-white p-2 rounded-md shadow-[0_5px_5px_rgba(0,0,0,0.5)]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

