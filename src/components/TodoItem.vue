<script setup lang="ts">
import type { Todo } from "../types/todo";

defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <div class="flex items-center justify-between p-4 border border-gray-600 rounded-md">
    <h1>{{ todo.title }}</h1>
    <input type="checkbox" v-model="todo.completed" />
  </div>
</template>

