import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const Header = defineComponent(() => {
  return () => (
    <div>
      <a href="#">Vue 3 JSX</a>

      <div>
        <RouterLink to={'/'}>Home</RouterLink>
        <RouterLink to={'/counter'}>Counter</RouterLink>
      </div>
    </div>
  );
});

export default defineComponent(() => {
  return () => (
    <>
      <Header />

      <RouterView />
    </>
  );
});
