<script setup lang="ts">
  interface Props {
    isOpen: boolean;
    title?: string;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    (e: "close"): void;
  }>();
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="absolute inset-0 flex items-center justify-center bg-black/50"
      @click="emit('close')"
    >
      <div
        class="bg-bodyBg rounded-lg p-4 w-5/6 max-w-2xl grid gap-2 content-start"
        @click.stop
      >
        <div class="flex justify-between items-center">
          <h3
            v-if="title"
            class="text-xl font-semibold"
          >
            {{ title }}
          </h3>
          <button
            class="bg-transparent border-none text-2xl cursor-pointer"
            @click="emit('close')"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div>
          <slot />
        </div>
        <div class="flex justify-center gap-2">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
