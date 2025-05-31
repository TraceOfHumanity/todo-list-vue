<template>
  <div class="border">
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
