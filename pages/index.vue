<template>
  <div class="container-fluid p-0 pt-5">
    <navbar page="home"></navbar>
    <div class="row mt-5 mx-0 d-flex justify-content-center">
      <div class="col-2" v-bind:class="{hidden: connected }">
        <div class="alert alert-dismissible alert-danger">
          <strong>Not connected !</strong><br>Please login to access the wish list.
        </div>
      </div>
      <div class="col-8" v-bind:class="{hidden: notConnected }">
        <div class="row d-flex justify-content-center mb-5">
          <img src="/logo_extended.png" alt="">
        </div>
        <div class="row d-flex">
          <h5>Here is the list of all wishes.</h5>
          <table class="table table-hover table-borderless  ">
            <thead>
            <tr>
              <th scope="col">Wish</th>
              <th scope="col">Author</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="i" v-for="(wish, i) in wishes" :data="wish">
              <td>{{wish.title}}</td>
              <td>{{wish.author}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from "~/components/navbar";

export default {
  name: "home",
  data: () => ({
    wishes: [],
    connected: false,
    notConnected: true
  }),
  components: {Navbar},
  methods: {
    async getWishes() {
      const wishes = await this.$axios.$get('/api/wish')
      this.wishes = wishes
    }
  },
  created() {
    if (process.browser) {
      if (localStorage.getItem('jwt') != null) {
        this.connected = true
        this.notConnected = false
        this.getWishes()
      }
    }
  }
}
</script>

<style scoped>
.center-cropped {
  width: 100%;
  height: 150px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
