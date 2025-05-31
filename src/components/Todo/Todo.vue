<template>
  <div
    class="rounded-lg max-h-[90vh] overflow-y-auto bg-[#1C1C1C] border border-black/30 p-2 shadow-[2px_4px_3px_rgba(0,0,0,0.5)] flex flex-col gap-2"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import {provide} from "vue";
  import {useTodoStore} from "../../stores/useTodoStore";
  import {useFilterStore} from "../../stores/useFilterStore";

  const todoStore = useTodoStore();
  const filterStore = useFilterStore();

  provide("todos", todoStore.todos);
  provide("filter", filterStore.filter);
</script>
