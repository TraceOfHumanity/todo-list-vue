import {defineStore} from "pinia";
import {ref} from "vue";
import type {TypeFilter} from "../components/Todo/types";

export const useFilterStore = defineStore("filter", () => {
  const filter = ref<TypeFilter>("all");

  const setFilter = (filter: TypeFilter) => {
    filter = filter;
  };

  return {
    filter,
    setFilter,
  };
});
