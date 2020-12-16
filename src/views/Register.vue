<template>
  <form action="" method="post">
    <div class="register">
      <h2>Register</h2>
      <div class="form-group">
        <label for="fname"><b>First Name</b></label
        ><br />
        <input
          style="width: 180px"
          type="text"
          placeholder="First name"
          name="fname"
          required
        />
      </div>

      <div class="form-group" style="float: right; margin-top: -86px">
        <label for="lname"><b>Last name</b></label
        ><br />
        <input
          style="width: 180px"
          type="text"
          placeholder="Last name"
          name="lname"
          required
        /><br />
      </div>

      <div class="form-group">
        <label for="uname"><b>Username</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Username"
          name="uname"
          required
        />
      </div>
      <div class="form-group">
        <label for="email"><b>Email</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="pass"><b>Password</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Enter Password"
          name="pass"
          required
        />
      </div>
      <div class="form-group">
        <label for="cpass"><b>Confirm Password</b></label
        ><br />
        <input
          style="width: 100%"
          type="text"
          placeholder="Confirm Password"
          name="cpass"
          required
        />
      </div>
      <input type="checkbox" id="terms" name="terms" value="terms" />
      <label for="vehicle1"> I have read and agree to the </label>
      <a href="#"> terms and agreement of service</a><br />
      <router-link to="/login">
        <button type="submit">Register</button>
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "Register",
};
</script>
