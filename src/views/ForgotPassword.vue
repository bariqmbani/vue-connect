<template>
  <form action="" method="post">
    <div class="container">
      <h2>Reset my password</h2>
      <b>Email</b>
      <input type="text" placeholder="connect@gmail.com" name="email" />

      <button style="width: 70%" type="submit">
        Send me reset password email
      </button>
      <button style="width: 25%; float: right" class="cancelbtn" type="submit">
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>
