<template>
  <div class="camera">
    <video autoplay class="feed"></video>
    <div class="camera-options">
      <button class="btn-option" @click="handleCamera">
        <img src="../assets/video.svg" alt="video" />
      </button>
      <button class="btn-option">
        <img src="../assets/mic.svg" alt="video" />
      </button>
    </div>
  </div>
</template>
<script>
import { onBeforeMount, onUnmounted, reactive } from "vue";
export default {
  name: "Camera",
  methods: {},
  setup() {
    const state = reactive({
      startVideo: false,
      stream: null,
    });

    function openCamera() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          state.stream = stream;
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("cannot get media devices");
      }
    }

    function closeCamera(stream) {
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    }

    function handleCamera() {
      if (state.startVideo || !state.stream) {
        openCamera();
      } else closeCamera(state.stream);
      state.startVideo = !state.startVideo;
    }

    onBeforeMount(() => {
      openCamera();
    });

    onUnmounted(() => {
      if (state.stream) closeCamera(state.stream);
    });

    return {
      state,
      handleCamera,
      openCamera,
      closeCamera,
    };
  },
};
</script>
<style>
.camera {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.camera .feed {
  position: relative;
  background-color: #171717;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
  position: relative;
  border-radius: 16px;
}

.camera .camera-options {
  position: absolute;
  min-width: 100%;
  height: 65px;
  background-color: rgba(73, 73, 73, 0.5);
  z-index: 100;
  bottom: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 16px 16px;
}

.camera .camera-options .btn-option {
  position: relative;
  margin: 0;
  padding: 0;
  width: 49px;
  height: 49px;
  background: white;
  color: #a5a5a5;
  border-radius: 100%;
  margin: 0 11.5px;
}
</style>