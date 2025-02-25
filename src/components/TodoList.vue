<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../stores/useTodoStore";
import { useModalsStore } from "../stores/useModalsStore";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();
const modalsStore = useModalsStore();

const todos = computed(() => todoStore.todos);
</script>

<template>
  <div class="grid gap-2">
    <div class="grid gap-2" v-if="todos.length > 0">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <p v-else class="text-center my-4">List is empty</p>
    <button @click="modalsStore.isAddTodoModalOpen = true">add todo</button>
  </div>
</template>
