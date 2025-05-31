import {defineStore} from "pinia";
import {ref} from "vue";
import type {TypeTodo} from "../components/Todo/types";
import {v4 as uuidv4} from "uuid";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<TypeTodo[]>([]);

  const addTodo = (title: string) => {
    if (!title) return;
    const todo: TypeTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    todos.value.push(todo);
  };

  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((todo: TypeTodo) => todo.id !== id);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
  };
});
