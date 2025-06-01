<template>
  <TodoEmpty v-if="todos.length === 0" />
  <div
    v-else
    class="grid gap-2"
  >
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script setup lang="ts">
  import {inject, type Ref} from "vue";
  import TodoItem from "./TodoItem.vue";
  import TodoEmpty from "./TodoEmpty.vue";
  import type {TypeTodo} from "./types";

  const todos = inject<Ref<TypeTodo[]>>("todos");

  if (!todos) {
    throw new Error("todos is not provided");
  }
</script>
