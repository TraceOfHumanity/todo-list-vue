<template>
  <label className="w-fit cursor-pointer">
    <input
      class="absolute hidden h-0 w-0"
      type="checkbox"
      :checked="isChecked"
      @change="emit('update:isChecked', !isChecked)"
    />
    <span class="flex size-6 items-center justify-center rounded border border-green">
      <img
        v-if="isChecked"
        src="/check.svg"
        alt="check"
        class="w-4 h-4"
      />
    </span>
  </label>
</template>

<script setup lang="ts">
  defineProps<{
    isChecked: boolean;
  }>();

  const emit = defineEmits<{
    (e: "update:isChecked", value: boolean): void;
  }>();
</script>
