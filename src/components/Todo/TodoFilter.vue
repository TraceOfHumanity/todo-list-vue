<template>
  <div class="flex gap-2 items-center">
    <img
      src="/filter.svg"
      alt="filter"
      class="w-5 h-5"
    />
    <BaseButton
      @click="filter = 'all'"
      :class="filter !== 'all' ? 'bg-green' : ''"
      >All</BaseButton
    >
    <BaseButton
      @click="filter = 'active'"
      :class="filter !== 'active' ? 'bg-green' : ''"
      >Active</BaseButton
    >
    <BaseButton
      @click="filter = 'completed'"
      :class="filter !== 'completed' ? 'bg-green' : ''"
      >Completed</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
  import {inject} from "vue";
  import BaseButton from "../Base/BaseButton.vue";

  const filter = inject("filter");
</script>
