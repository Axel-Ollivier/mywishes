<template>
  <div class="d-flex justify-content-center flex-column">
    <div class="form-group">
      <label for="usernameInput">username</label>
      <input v-model="usernameInput" type="text" class="form-control" id="usernameInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="emailInput">email</label>
      <input v-model="emailInput" type="text" class="form-control" id="emailInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="addressInput">address</label>
      <input v-model="addressInput" type="text" class="form-control" id="addressInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="usernameInput">password</label>
      <input v-model="passwordInput" type="password" class="form-control" id="passwordInput">
    </div>
    <button type="button" class="btn btn-dark" @click="signup">
      Signup
    </button>
  </div>
</template>

<script>
export default {
  name: "signupForm",
  data: () => ({
    usernameInput: '',
    emailInput: '',
    addressInput: '',
    passwordInput: '',
  }),
  methods: {
    async signup() {
      var self = this
      await this.$axios.$post('/api/auth/signup', {
        "username": this.usernameInput,
        "email": this.emailInput,
        "address": this.addressInput,
        "password": this.passwordInput,
        "roles": ["user"]
      })
          .then(function () {
            self.$nuxt.$router.replace({path: '/'})
          })
          .catch(function (error) {
            console.log(error);
            self.error = "signup error"
          });
    }
  }
}
</script>

<style scoped>

</style>
