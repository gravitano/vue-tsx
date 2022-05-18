import { defineStore } from 'pinia';

type AuthState = {
  loggedIn: boolean;
  user: Record<string, any> | null;
};

export const useAuth = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    loggedIn: false,
    user: null,
  }),
  actions: {
    login(username: string, password: string) {
      console.log(username, password);
      this.user = {
        username,
        password,
      };
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
    },
  },
});
