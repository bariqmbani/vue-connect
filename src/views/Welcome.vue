<template>
  <Navbar />
  <div class="container">
    <h2>Hi, Muhammad Fariz</h2>
    <h5 style="text-align: center">
      Welcome back, let's meet, study, or hangout using Connect App
    </h5>
    <div class="button-connect">
      <router-link to="/conference/join">
        <button style="width: auto" type="submit">
          <i class="fas fa-video"></i> Join Meeting
        </button>
      </router-link>
      <router-link to="/webinar/join">
        <button style="width: auto" type="submit">
          <i class="fas fa-broadcast-tower"></i> Join webinar
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Welcome",
  components: { Navbar },
};
</script>

<style>
.button-connect button {
  margin: 10px;
}
</style>