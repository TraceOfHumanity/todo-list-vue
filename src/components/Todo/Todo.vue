<template>
  <div
    class="rounded-lg max-h-[90vh] overflow-y-auto bg-[#1C1C1C] border border-black/30 p-2 shadow-[2px_4px_3px_rgba(0,0,0,0.5)] flex flex-col gap-2"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import {computed, provide} from "vue";
  import {useTodoStore} from "../../stores/useTodoStore";
  import {useFilterStore} from "../../stores/useFilterStore";

  const todoStore = useTodoStore();
  const filterStore = useFilterStore();

  const todos = computed(() => todoStore.todos);

  const filterValue = computed(() => filterStore.filter);

  const filteredTodos = computed(() => {
    if (filterValue.value === "all") {
      return todos.value;
    } else if (filterValue.value === "completed") {
      return todos.value.filter((todo) => todo.completed);
    } else {
      return todos.value.filter((todo) => !todo.completed);
    }
  });

  provide("todos", filteredTodos);
  provide("filter", filterValue);
  provide("setFilter", filterStore.setFilter);
  provide("addTodo", todoStore.addTodo);
  provide("deleteTodo", todoStore.deleteTodo);
</script>
