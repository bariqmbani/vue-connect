<template>
  <div class="wrapper">
    <Navbar />
  </div>
  <div class="container">
    <h2>Hi, Muhammad Fariz</h2>
    <h5 style="text-align: center">
      Welcome back, let's meet, study, or hangout using Connect App
    </h5>
    <div class="button-connect">
      <button
        style="width: auto"
        onclick="document.location='Join Conference.html'"
        type="submit"
      >
        <i class="fas fa-video"></i> Join Meeting
      </button>
      <button
        style="width: auto"
        onclick="document.location='Join webinar.html'"
        type="submit"
      >
        <i class="fas fa-broadcast-tower"></i> Join webinar
      </button>
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