<template>
  <Navbar />
  <div class="container">
    <div class="edit-profil">
      <div class="box">
        <div class="profile-picture">
          <img src="../assets/profile2.png" alt="profile" />
          <div><input type="file" id="myfile" name="myfile" /><br /><br /></div>
        </div>
        <button onclick="document.location='profile.html'">Update</button>
      </div>
      <div class="box-profile">
        <h2>Update User Info</h2>
        <div class="form-group" style="float: left">
          <label for="fname"><b>First Name</b></label
          ><br />
          <input
            style="width: 160px"
            type="text"
            placeholder="First name"
            name="fname"
            required
          />
        </div>
        <div class="form-group" style="float: right">
          <label for="lname"><b>Last name</b></label
          ><br />
          <input
            style="width: 160px"
            type="text"
            placeholder="Last name"
            name="lname"
            required
          /><br />
        </div>
        <label for="uname"><b>Username</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Username"
          name="uname"
          required
        />
        <label for="email"><b>Email</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Email"
          name="email"
          required
        />
        <button onclick="document.location='profile.html'">Update</button>
      </div>

      <div class="box-profile" style="float: right">
        <h2>Update Password</h2>
        <label for="topic"><b>Old Password</b></label
        ><br />
        <input type="text" placeholder="" name="oldpass" required />
        <label for="topic"><b>New Password</b></label
        ><br />
        <input type="text" placeholder="" name="topic" required />
        <label for="topic"><b>Confirm Password</b></label
        ><br />
        <input type="text" placeholder="" name="confrimpass" required />
        <button onclick="document.location='profile.html'">Update</button>
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