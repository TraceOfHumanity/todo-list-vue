<script setup lang="ts">
import Todo from "./components/Todo";
</script>

<template>
  <Todo>
    <Todo.filter />
    <Todo.empty />
    <Todo.input />
    <Todo.list>
      <Todo.item />
    </Todo.list>
  </Todo>
</template>
