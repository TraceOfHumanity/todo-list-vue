<template>
  <input
    type="checkbox"
    :checked="isChecked"
    @change="emit('update:isChecked', !isChecked)"
  />
</template>

<script setup lang="ts">
  defineProps<{
    isChecked: boolean;
  }>();

  const emit = defineEmits<{
    (e: "update:isChecked", value: boolean): void;
  }>();
</script>
