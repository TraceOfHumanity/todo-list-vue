<template>
  <div class="flex gap-2 items-center">
    <img src="/filter.svg" alt="filter" class="w-5 h-5" />
    <BaseButton @click="filter = 'all'">All</BaseButton>
    <BaseButton @click="filter = 'active'">Active</BaseButton>
    <BaseButton @click="filter = 'completed'">Completed</BaseButton>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import BaseButton from "../Base/BaseButton.vue";

const filter = inject("filter");
</script>
