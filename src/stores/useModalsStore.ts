import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalsStore = defineStore('modals', () => {
  const isAddTodoModalOpen = ref(false);

  return {
    isAddTodoModalOpen,
  }
});