<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="logo">
        <img
          src="../assets/logo.png"
          alt="logo"
          style="width: 80%"
          @click="handleLogoClick"
        />
      </div>
      <div class="nav_right">
        <ul>
          <li v-if="isConference || isProfile">
            <router-link to="/conference/join">Join Meeting</router-link>
          </li>
          <li v-if="isConference || isProfile">
            <router-link to="/conference/join/setting"
              >Create Meeting</router-link
            >
          </li>
          <li v-if="isConference || isProfile">
            <router-link to="/conference/list">Meeting List</router-link>
          </li>
          <li v-if="isWebinar">
            <router-link to="/webinar/join">Join Webinar</router-link>
          </li>
          <li v-if="isWebinar">
            <router-link to="/webinar/join/setting">Create Webinar</router-link>
          </li>
          <li v-if="isWebinar">
            <router-link to="/webinar/list">Webinar List</router-link>
          </li>
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
                  <li>
                    <router-link to="/profile">
                      <a>Profile</a>
                    </router-link>
                  </li>
                  <li @click="handleLogout"><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      isActive: false,
      currentRoute: router.currentRoute,
    });

    const isConference = state.currentRoute.fullPath.includes("/conference");
    const isWebinar = state.currentRoute.fullPath.includes("/webinar");
    const isProfile = state.currentRoute.fullPath.includes("/profile");

    function handleNavClick() {
      state.isActive = !state.isActive;
    }

    function handleLogoClick() {
      router.push("/");
      console.log(state.currentRoute);
    }

    async function handleLogout() {
      await store.dispatch("User/clearUser");
      router.push("/login");
    }

    return {
      state,
      handleNavClick,
      handleLogoClick,
      handleLogout,
      isConference,
      isWebinar,
      isProfile,
    };
  },
};
</script>

<style>
.logo {
  cursor: pointer;
}
</style>