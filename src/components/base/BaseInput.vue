<template>
  <input
    type="text"
    class="p-2 rounded-md border border-gray-600 outline-none"
    :value="modelValue"
    @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
    placeholder="Enter your todo"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
