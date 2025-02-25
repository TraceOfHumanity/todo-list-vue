import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Todo } from '../types/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);

  return {
    todos,
  }
})