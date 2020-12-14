<template>
  <Navbar />
  <div class="container">
    <div class="profil">
      <div class="box">
        <div class="profile-picture">
          <img src="../assets/profile2.png" alt="profile" />
        </div>
        <h2>Muhammad Fariz</h2>
        <h5>Username : mhdfariz</h5>
        <h5>Email : farizmuhammad190@gmail.com</h5>
        <router-link to="/profile/edit">
          <button>Edit Profle</button>
        </router-link>
      </div>
      <div class="box">
        <h2>Verify account</h2>
        <h5>Your account has not been verified.</h5>
        <button>Send me verifycation email</button>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  name: "Profile",
  components: { Navbar },
};
</script>
<style>
</style>