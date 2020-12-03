<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <router-link style="text-decoration: none; color: #000000" class="special-elite navbar-brand" id="brand" to="/">
          <img src="/logo_minimal.png" height="30" alt="" loading="lazy">
      </router-link>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link v-bind:class="{hidden: notConnected}" v-if="page != 'userWishes'" class="nav-link" to="/userWishes">Add or remove a wish
            </router-link>
          </li>
        </ul>
      </div>
      <router-link class="btn btn-outline-secondary my-2 my-sm-0 mr-2" v-bind:class="{hidden: connected}" v-if="page != 'account'" id="signup" to="/account">Signup</router-link>
      <router-link class="btn btn-success my-2 my-sm-0" v-bind:class="{hidden: connected}" v-if="page != 'account'" id="login" to="/account">Login</router-link>
      <button class="btn btn-danger my-2 my-sm-0" v-bind:class="{hidden: notConnected}" id="logout" @click="logout">Logout</button>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data: () => ({
    connected: false,
    notConnected: true
  }),
  props: ['page'],
  methods: {
    logout() {
      if (process.browser) {
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        window.location = "/"
      }
    },
  },
  created() {
    if (process.browser) {
      if (localStorage.getItem('jwt') != null) {
        this.connected = true
        this.notConnected = false
      }
    }
  }
}
</script>
