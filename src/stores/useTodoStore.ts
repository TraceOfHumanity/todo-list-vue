import {defineStore} from "pinia";
import {ref} from "vue";
import type {Todo} from "../types/todo";
import {v4 as uuidv4} from "uuid";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  const addTodo = (title: string) => {
    const todo: Todo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    todos.value.push(todo);
  };

  return {
    todos,
    addTodo,
  };
});
