<script setup lang="ts">
import {computed} from "vue";
import {useTodoStore} from "../stores/useTodoStore";
import {useModalsStore} from "../stores/useModalsStore";
import TodoItem from "./TodoItem.vue";
import BaseButton from "./base/BaseButton.vue";

const todoStore = useTodoStore();
const modalsStore = useModalsStore();

const todos = computed(() => todoStore.todos);
</script>

<template>
  <div class="grid gap-2">
    <div class="grid gap-2" v-if="todos.length > 0">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
    <p v-else class="my-4 text-center">List is empty</p>
    <BaseButton
      class="flex items-center justify-center rounded-b-full p-2"
      @click="modalsStore.isAddTodoModalOpen = true"
    >
      <img class="h-6 w-6" src="/plus.svg" alt="add todo" />
    </BaseButton>
  </div>
</template>
