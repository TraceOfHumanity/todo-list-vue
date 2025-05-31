<template>
  <div class="grid grid-cols-[auto_1fr_auto] items-center gap-2">
    <input
      type="checkbox"
      v-model="props.todo.completed"
    />
    <span>{{ props.todo.title }}</span>
    <BaseButton
      class="bg-red ml-auto"
      @click="todoStore.deleteTodo(props.todo.id)"
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
  import {useTodoStore} from "../../stores/useTodoStore";
  import BaseButton from "../Base/BaseButton.vue";

  const todoStore = useTodoStore();

  const props = defineProps<{
    todo: TypeTodo;
  }>();
</script>
