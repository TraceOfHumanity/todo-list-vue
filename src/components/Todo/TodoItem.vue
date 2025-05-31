<template>
  <div class="grid grid-cols-2 gap-2">
    <div class="flex items-center gap-2">
      <input type="checkbox" v-model="props.todo.completed" />
      <span>{{ props.todo.title }}</span>
      <BaseButton class="bg-red-600" @click="todoStore.deleteTodo(props.todo.id)">
        <img src="/bin.svg" alt="delete" class="w-4 h-4 text-white" />
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Todo} from "../../types/todo";
import {useTodoStore} from "../../stores/useTodoStore";
import BaseButton from "../Base/BaseButton.vue";

const todoStore = useTodoStore();

const props = defineProps<{
  todo: Todo;
}>();
</script>
