import { defineComponent, ref } from 'vue';

export default defineComponent(() => {
  const todos = ref([
    {
      text: 'Task 1',
      isCompleted: false,
    },
    {
      text: 'Task 2',
      isCompleted: false,
    },
  ]);
  const newTodo = ref('');

  const addTodo = () => {
    todos.value.push({
      text: newTodo.value,
      isCompleted: false,
    });
  };

  return () => (
    <div>
      {todos.value.map((todo) => (
        <li>{todo.text}</li>
      ))}
      <input type="text" v-model={newTodo.value} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
});
