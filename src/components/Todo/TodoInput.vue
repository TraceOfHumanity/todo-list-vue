<template>
  <div class="grid gap-2">
    <BaseInput
      v-model="title"
      placeholder="Add a new todo"
    />
    <div class="grid">
      <BaseButton
        class="bg-green disabled:opacity-50 disabled:!cursor-not-allowed duration-200"
        @click="handleAddTodo"
        :disabled="!title"
        >Add</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import {inject, ref} from "vue";
  import BaseInput from "../Base/BaseInput.vue";
  import BaseButton from "../Base/BaseButton.vue";

  const title = ref("");
  const addTodo = inject<(title: string) => void>("addTodo");

  const handleAddTodo = () => {
    if (addTodo) {
      addTodo(title.value);
      title.value = "";
    }
  };
</script>
