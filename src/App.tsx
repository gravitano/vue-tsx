import { defineComponent } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import './index.css';
import { useAuth } from './stores/auth';

const Header = defineComponent(() => {
  const auth = useAuth();
  const router = useRouter();

  const logout = () => {
    auth.logout();
    router.push('/');
  };

  return () => (
    <div class="py-3 border-b bg-white">
      <div class="container mx-auto flex gap-4 justify-between">
        <RouterLink to="/" class="font-semibold text-lg">
          Vue 3 JSX
        </RouterLink>

        <div class="flex gap-3">
          <RouterLink to={'/'}>Home</RouterLink>
          <RouterLink to={'/counter'}>Counter</RouterLink>
          {auth.loggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <RouterLink to={'/login'}>Login</RouterLink>
          )}
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
