import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import './index.css';

const Header = defineComponent(() => {
  return () => (
    <div class="py-3 border-b bg-white">
      <div class="container mx-auto flex gap-4 justify-between">
        <RouterLink to="/" class="font-semibold text-lg">
          Vue 3 JSX
        </RouterLink>

        <div class="flex gap-3">
          <RouterLink to={'/'}>Home</RouterLink>
          <RouterLink to={'/counter'}>Counter</RouterLink>
        </div>
      </div>
    </div>
  );
});

export default defineComponent(() => {
  return () => (
    <>
      <Header />

      <div class="container mx-auto py-2">
        <RouterView />
      </div>
    </>
  );
});
