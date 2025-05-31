<script setup lang="ts">
import Todo from "./components/Todo";
</script>

<template>
  <Todo>
    <Todo.Header />
    <Todo.Input />
    <Todo.Filter />
    <Todo.Empty />
    <Todo.List />
  </Todo>
</template>
