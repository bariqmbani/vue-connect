<template>
  <Navbar />

  <form action="" method="post" @submit.prevent>
    <div class="container">
      <h2>Create Webinar</h2>
      <div class="form-group">
        <label for="topic"><b>Topic</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Topic"
          name="topic"
          required
        />
      </div>
      <div class="form-group">
        <label for="desc"><b>Description</b></label
        ><br />
        <textarea
          class="textarea-create"
          style="width: 100%; height: 130px"
          type="text"
          placeholder="Enter Description"
          name="desc"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="date"><b>Date</b></label
        ><br />
        <input
          style="width: 180px"
          type="text"
          placeholder="HH/BB/TTTT"
          name="date"
          required
        />
      </div>

      <div class="form-group" style="float: right; margin-top: -86px">
        <label for="time"><b>Time</b></label
        ><br />
        <input
          style="width: 180px"
          type="text"
          placeholder="HH/BB/TTTT"
          name="time"
          required
        /><br />
      </div>

      <input type="checkbox" id="terms" name="terms" value="terms" />
      <label for="passphrase"> Passphrase </label> <br />
      <button style="width: 70%" type="submit">Create Webinar</button>
      <router-link to="/conference/list">
        <button
          style="width: 25%; float: right"
          class="cancelbtn"
          type="submit"
        >
          Cancel
        </button>
      </router-link>
    </div>
  </form>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  name: "CreateMeeting",
  components: { Navbar },
};
</script>
<style>
.textarea-create {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: Poppins;
  border-radius: 5px;
}
</style>