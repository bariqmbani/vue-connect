<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" style="width: 80%" />
    </div>
    <div class="nav_right">
      <ul>
        <li
          class="nr_li dd_main"
          @click="handleNavClick"
          :class="{ active: state.isActive }"
        >
          <img src="../assets/profile.png" alt="profile_img" />
          <i class="fas fa-chevron-down"></i>

          <div class="dd_menu">
            <div class="dd_left">
              <ul>
                <li><i class="fas fa-user"></i></li>
                <li><i class="fas fa-sign-out-alt"></i></li>
              </ul>
            </div>
            <div class="dd_right">
              <ul>
                <li><a href="profile.html">Profile</a></li>
                <li @click="handleLogout"><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Navbar",
  setup() {
    const state = reactive({
      isActive: false,
    });

    const store = useStore();
    const router = useRouter();

    function handleNavClick() {
      state.isActive = !state.isActive;
    }

    function handleLogoClick() {
      router.push("/");
    }

    async function handleLogout() {
      await store.dispatch("User/setUser", null);
      router.push("/login");
    }

    return {
      state,
      handleNavClick,
      handleLogoClick,
      handleLogout,
    };
  },
};
</script>

<style>
.logo {
  cursor: pointer;
}
</style>