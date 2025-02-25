<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import AddTodoForm from "./AddTodoForm.vue";


</script>

<template>
  <div>
    <div v-if="todos.length > 0">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <p v-else class="text-center my-4">
      List is empty
    </p>
    <AddTodoForm />
  </div>
</template>

