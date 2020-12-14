<template>
  <Navbar />
  <div class="list">
    <p>List Meeting</p>
    <table>
      <tr>
        <th>No.</th>
        <th>Join Key</th>
        <th>Topic</th>
        <th>Passphrase</th>
        <th>Start time</th>
        <th>end time</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>1</td>
        <td>vYBS7Dv4fZ</td>
        <td>UI/UX Designer</td>
        <td>Pgz1p6rGGM</td>
        <td>2020-08-13 10:37:00</td>
        <td>2020-08-13 10:37:00</td>
        <td>
          <button id="myBtn" class="button-detail" @click="handleDetailClick">
            Detail
          </button>
        </td>

        <td>
          <router-link to="/conference/join">
            <button class="button-join">Join Meeting</button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>

  <div id="myModal" class="modal" :class="{ 'd-block': state.showModal }">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="handleCloseClick">&times;</span>
      <h2>Meeting Detail</h2>
      <table>
        <tr>
          <td>Join Key :</td>
          <td>vYBS7Dv4fZ</td>
        </tr>
        <tr>
          <td>Private :</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Topic :</td>
          <td>UI/UX Designer</td>
        </tr>
        <tr>
          <td>Passphrase :</td>
          <td>Pgz1p6rGGM</td>
        </tr>
        <tr>
          <td>Start Time :</td>
          <td>2020-08-13 10:37:00</td>
        </tr>
        <tr>
          <td>End Time :</td>
          <td>2020-08-13 10:37:00</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import Navbar from "../components/Navbar";

export default {
  name: "ListMeeting",
  components: { Navbar },

  setup() {
    const state = reactive({
      showModal: false,
    });

    function handleDetailClick() {
      state.showModal = true;
    }

    function handleCloseClick() {
      state.showModal = false;
    }

    return {
      state,
      handleDetailClick,
      handleCloseClick,
    };
  },
};
</script>
<style>
.d-block {
  display: block;
}
</style>