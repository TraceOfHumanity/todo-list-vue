import Todo from "./Todo.vue";
import TodoEmpty from "./TodoEmpty.vue";
import TodoFilter from "./TodoFilter.vue";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import TodoList from "./TodoList.vue";

export default Todo;

Todo.filter = TodoFilter;
Todo.empty = TodoEmpty;
Todo.input = TodoInput;
Todo.list = TodoList;
Todo.item = TodoItem;
