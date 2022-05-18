import { useAuth } from '@/stores/auth';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent(() => {
  const username = ref('');
  const password = ref('');

  const auth = useAuth();
  const router = useRouter();

  const onSubmit = (e: Event) => {
    e.preventDefault();
    auth.login(username.value, password.value);
    router.push('/profile');
  };

  return () => (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label for="username">Username</label>
          <input type="text" v-model={username.value} />
        </div>
        <div>
          <label for="password">password</label>
          <input type="password" v-model={password.value} />
        </div>
        <button>Login</button>
      </form>
    </>
  );
});
