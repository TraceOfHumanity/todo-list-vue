<template>
  <div class="grid gap-2">
    <TodoItem v-for="todo in todos" :key="todo" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import TodoItem from "./TodoItem.vue";

const todos = inject("todos");
</script>
