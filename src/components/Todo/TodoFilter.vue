<template>
  <div class="flex gap-2 items-center">
    <img
      src="/filter.svg"
      alt="filter"
      class="w-5 h-5"
    />
    <BaseButton
      @click="setFilter('all')"
      :class="filterValue !== 'all' ? 'bg-green' : ''"
      >All</BaseButton
    >
    <BaseButton
      @click="setFilter('active')"
      :class="filterValue !== 'active' ? 'bg-green' : ''"
      >Active</BaseButton
    >
    <BaseButton
      @click="setFilter('completed')"
      :class="filterValue !== 'completed' ? 'bg-green' : ''"
      >Completed</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
  import {inject} from "vue";
  import type {Ref} from "vue";
  import BaseButton from "../Base/BaseButton.vue";

  const filterValue = inject<Ref<"completed" | "all" | "active">>("filter");
  const setFilter = inject<(value: "completed" | "all" | "active") => void>("setFilter");

  if (!setFilter) {
    throw new Error("setFilter is not provided");
  }
</script>
