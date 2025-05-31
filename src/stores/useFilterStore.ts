import {defineStore} from "pinia";
import {ref} from "vue";

export const useFilterStore = defineStore("filter", () => {
  const filter = ref<"all" | "completed" | "active">("all");

  return {
    filter,
  };
});
