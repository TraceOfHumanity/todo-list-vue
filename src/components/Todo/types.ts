export interface TypeTodo {
  id: string;
  title: string;
  completed: boolean;
}

export type TypeFilter = "all" | "completed" | "active";
