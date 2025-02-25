<script setup lang="ts">
import Header from "./components/common/Header.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import { ref } from "vue";
import type { Todo } from "./types/todo";

const todos = ref<Todo[]>([]);
</script>

<template>
  <Header />
  <TodoFilter />
  <TodoList />
</template>
