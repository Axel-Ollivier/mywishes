<template>
  <div class="container-fluid p-0 pt-5">
    <navbar page="userWishes"></navbar>
    <div class="row mt-5 mx-0 offset-1 d-flex justify-content-center flex-direction-column">
      <div class="col-10 col-md-4 mb-5">
        <h5 class="mb-1">Add a wish</h5>
        <WishAddForm></WishAddForm>
      </div>
      <div class="col-10 col-md-4">
        <h5>Your wishes</h5>
        <label></label>
        <table class="table table-hover table-borderless">
          <thead>
          <tr>
          </tr>
          </thead>
          <tbody>
          <tr :key="i" v-for="(wish, i) in wishes" :data="wish" v-if="wish.author === currentUser">
            <td>{{ wish.title }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteWish(wish.id)">X</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import WishAddForm from "../components/WishAddForm";

export default {
  name: "tasks",
  data: () => ({
    wishes: [],
    currentUser: ''
  }),
  methods: {
    async getWishes() {
      const wishes = await this.$axios.$get('/api/wish')
      this.wishes = wishes
    },
    async deleteWish(id) {
      var jwt
      if (process.browser) {
        if (localStorage.getItem('jwt') != null) {
          jwt = localStorage.getItem('jwt')
          const headers = {
            'x-access-token': jwt
          }
          await this.$axios.$delete('/api/wish/' + id, {headers}).then(function () {
            location.reload()
          })
        }
      }
    },
    getCurrentUser(){
      if (process.browser) {
        return localStorage.getItem('username')
      }
    }
  },
  created() {
    if (process.browser) {
      if (localStorage.getItem('jwt') == null) {
        this.$router.push('/')
      }
      this.currentUser = localStorage.getItem('username')
    }
    this.getWishes()
  },
  components: {WishAddForm, Navbar}
}
</script>

<style scoped>

</style>
