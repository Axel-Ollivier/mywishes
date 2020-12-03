<template>
  <div class="container-fluid p-0 pt-5">
    <navbar page="account"></navbar>
    <div class="row d-flex justify-content-center flex-direction-row mt-5">
        <div class="col-10 col-md-5 mb-5">
          <h5 style="margin-bottom: 20px; text-align: center">Login</h5>
          <LoginForm></LoginForm>
        </div>
        <div class="col-10 col-md-5">
          <h5 style="margin-bottom: 20px; text-align: center">Signup</h5>
          <SignupForm></SignupForm>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import LoginForm from "@/components/loginForm";
import SignupForm from "@/components/signupForm";

export default {
  name: "account",
  components: {SignupForm, LoginForm, Navbar}
}
</script>

<style scoped>

</style>
