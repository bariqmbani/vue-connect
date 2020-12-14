<template>
  <Navbar />
  <form action="" method="post">
    <div class="container">
      <h2>Join Webinar</h2>
      <input type="text" placeholder="insert code" name="jcon" />
      <router-link to="/conference/join/setting">
        <button submit>Join Room</button>
      </router-link>
    </div>
  </form>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  name: "JoinWebinar",
  components: { Navbar },
};
</script>
<style>
</style>