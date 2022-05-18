import { computed, defineComponent, ref } from 'vue';

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

  const completed = computed(() =>
    todos.value.filter((item) => item.isCompleted)
  );

  return () => (
    <div>
      <h1 class="font-semibold text-2xl mb-4">Counter</h1>

      <input
        placeholder="Type something..."
        type="text"
        v-model={newTodo.value}
        class="px-3 py-2 border border-gray-300 rounded-md mr-3"
      />
      <button
        class="rounded-md px-3 py-2 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
        onClick={addTodo}
      >
        Add
      </button>

      <div class="text-sm mt-3 text-gray-600">
        Competed: ({completed.value.length})
      </div>

      <div class="mt-3">
        {todos.value.map((todo) => (
          <div class="flex gap-4 items-center">
            <span>{todo.text}</span>
            <input type="checkbox" v-model={todo.isCompleted} />
          </div>
        ))}
      </div>
    </div>
  );
});
