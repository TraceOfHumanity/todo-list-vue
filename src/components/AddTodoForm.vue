<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/useTodoStore";
import BaseInput from "./base/BaseInput.vue";
const todoStore = useTodoStore();

const title = ref('');

const addTodo = () => {
  todoStore.addTodo(title.value);
  title.value = '';
}
</script>

<template>
  <div>
    <!-- <input type="text" v-model="title" /> -->
    <BaseInput v-model="title" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

