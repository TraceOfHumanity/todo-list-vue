<script setup lang="ts">
import Todo from "./components/Todo";
</script>

<template>
  <Todo>
    <Todo.header />
    <Todo.input />
    <Todo.filter />
    <Todo.empty />
    <Todo.list />
  </Todo>
</template>
