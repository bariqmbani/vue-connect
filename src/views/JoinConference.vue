<template>
  <Navbar />
  <form action="" method="post">
    <div class="container">
      <h2>Join Conference</h2>
      <input type="text" placeholder="insert code" name="jcon" />
      <router-link to="/conference/join/setting">
        <button>Join Room</button>
      </router-link>
    </div>
  </form>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  name: "JoinConference",
  components: { Navbar },
};
</script>
<style>
</style>