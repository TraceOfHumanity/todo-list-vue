<template>
  <input 
  type="text" 
  class="w-full p-2 rounded-md" 
  :value="modelValue" 
  @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)" />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

