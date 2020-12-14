<template>
  <Navbar />
  <div class="container">
    <div class="video">
      <div class="col">
        <video
          style="border-radius: 16px; float: left"
          width="640"
          height="460"
          controls
        >
          <source type="video/mp4" />
        </video>
      </div>
      <div class="col">
        <div class="ready">
          <h3>Meeting Ready</h3>
          <button style="border-radius: 40px; width: auto; padding: 16px 40px">
            <i class="fas fa-video"></i> Join Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  name: "JoinMeetingSetting",
  components: { Navbar },
};
</script>
<style>
</style>