<template>
  <Navbar />
  <div class="container">
    <div class="video">
      <div class="col">
        <div class="camera-wrapper">
          <Camera />
        </div>
      </div>
      <div class="col">
        <div class="ready">
          <h3 v-if="isMeeting">Meeting Ready</h3>
          <h3 v-if="isWebinar">Webinar Ready</h3>
          <button
            style="border-radius: 40px; width: auto; padding: 16px 40px"
            @click="click"
          >
            <i class="fas fa-video"></i> Join Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Camera from "../components/Camera";
import { useRouter } from "vue-router";
import { reactive } from "vue";

export default {
  name: "JoinMeetingSetting",
  components: { Navbar, Camera },
  setup() {
    const router = useRouter();

    const state = reactive({
      currentRoute: router.currentRoute,
    });

    const isWebinar = state.currentRoute.fullPath.includes("/webinar");
    const isMeeting = state.currentRoute.fullPath.includes("/conference");

    return { isWebinar, isMeeting };
  },
};
</script>
<style>
.camera-wrapper {
  width: 640px;
  height: 460px;
  float: left;
}
</style>