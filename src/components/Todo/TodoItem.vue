<template>
  <div class="grid grid-cols-[auto_1fr_auto] items-center gap-2 [&:not(:last-child)]:border-b border-green/20 pb-2">
    <BaseCheckbox
      :is-checked="props.todo.completed"
      @update:isChecked="props.todo.completed = $event"
    />
    <span :class="props.todo.completed ? 'line-through' : ''">{{ props.todo.title }}</span>
    <BaseButton
      class="bg-red ml-auto"
      @click="deleteTodo?.(props.todo.id)"
    >
      <img
        src="/bin.svg"
        alt="delete"
        class="w-5 h-5"
      />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import type {TypeTodo} from "./types";
  import BaseButton from "../Base/BaseButton.vue";
  import BaseCheckbox from "../Base/BaseCheckbox.vue";
  import {inject} from "vue";

  const props = defineProps<{
    todo: TypeTodo;
  }>();

  const deleteTodo = inject<(id: string) => void>("deleteTodo");
</script>
