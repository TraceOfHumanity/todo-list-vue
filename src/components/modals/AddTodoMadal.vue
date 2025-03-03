<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../../stores/useTodoStore";
import BaseInput from "../base/BaseInput.vue";
import BaseButton from "../base/BaseButton.vue";
import { useModalsStore } from "../../stores/useModalsStore";
import ModalsWrapper from "./ModalsWrapper.vue";

const todoStore = useTodoStore();
const modalsStore = useModalsStore();

const title = ref("");

const addTodo = () => {
  todoStore.addTodo(title.value);
  title.value = "";
  modalsStore.isAddTodoModalOpen = false;
};

const cancel = () => {
  modalsStore.isAddTodoModalOpen = false;
  title.value = "";
};
</script>

<template>
  <ModalsWrapper
    :isOpen="modalsStore.isAddTodoModalOpen"
    title="Add Todo"
    @close="cancel"
  >
    <div class="grid gap-2">
      <BaseInput v-model="title" />
    </div>
    <template #footer>
      <BaseButton @click="cancel">Cancel</BaseButton>
      <BaseButton @click="addTodo">Add Todo</BaseButton>
    </template>
  </ModalsWrapper>
</template>
