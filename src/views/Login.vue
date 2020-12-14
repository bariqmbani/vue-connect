<template>
  <form @submit.prevent="login" action="" method="post">
    <div class="login">
      <h2>Login</h2>
      <div class="input-icons">
        <i class="fa fa-user icon"></i>
        <input type="username" placeholder="Username" name="uname" />
        <br />
        <i class="fa fa-lock icon"></i>
        <input type="password" placeholder="Password" name="psw" />
        <span class="psw">
          <router-link to="/forgot-password">
            <a>Forgot password?</a>
          </router-link>
        </span>
      </div>

      <button type="submit">Login</button>
      <span class="rgs">
        <router-link to="/register">
          Don't have an account? <a>Register now?</a>
        </router-link>
      </span>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed(() => store.state.User.user);

    if (user.value) router.push("/");

    async function login() {
      await store.dispatch("User/setUser", { id: 1 });
      router.push("/");
    }
    return {
      login,
    };
  },
};
</script>

