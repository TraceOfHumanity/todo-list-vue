<template>
  <div class="grid gap-2">
    <BaseInput v-model="title" />
    <BaseButton @click="addTodo">Add Todo</BaseButton>
    <BaseButton @click="cancel">Cancel</BaseButton>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useTodoStore} from "../../stores/useTodoStore";
import BaseInput from "../Base/BaseInput.vue";
import BaseButton from "../Base/BaseButton.vue";

const todoStore = useTodoStore();

const title = ref("");

const addTodo = () => {
  todoStore.addTodo(title.value);
  title.value = "";
};

const cancel = () => {
  title.value = "";
};
</script>
