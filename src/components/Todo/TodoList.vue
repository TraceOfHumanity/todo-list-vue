<template>
  <div class="grid gap-2">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import {useTodoStore} from "../../stores/useTodoStore";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();
</script>
