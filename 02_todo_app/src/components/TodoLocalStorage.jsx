const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos || rawTodos === "undefined") return []; // Added check for "undefined"
  return JSON.parse(rawTodos);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
