<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../../stores/useTodoStore";
import BaseInput from "../base/BaseInput.vue";
import BaseButton from "../base/BaseButton.vue";
import BaseModal from "./BaseModal.vue";
import { useModalsStore } from "../../stores/useModalsStore";

const todoStore = useTodoStore();
const modalsStore = useModalsStore();

const title = ref("");

const addTodo = () => {
  todoStore.addTodo(title.value);
  title.value = "";
  modalsStore.isAddTodoModalOpen = false;
};
</script>

<template>
  <BaseModal
    :isOpen="modalsStore.isAddTodoModalOpen"
    title="Add Todo"
    @close="modalsStore.isAddTodoModalOpen = false"
  >
    <div class="grid gap-2">
      <BaseInput v-model="title" />
      <BaseButton @click="addTodo">Add Todo</BaseButton>
    </div>
  </BaseModal>
</template>
