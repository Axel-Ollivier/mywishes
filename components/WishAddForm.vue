<template>
  <div class="d-flex justify-content-center flex-column">
    <div class="form-group">
      <label for="titleInput">Title</label>
      <input v-model="titleInput" type="text" class="form-control" id="titleInput">
    </div>
    <button class="btn btn-dark" @click="addWish">
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "WishAddForm",
  data: () => ({
    titleInput: '',
    currentUser: ''
  }),
  methods: {
    async addWish() {
      var self = this
      var jwt
      if (process.browser) {
        if (localStorage.getItem('jwt') != null) {
          jwt = localStorage.getItem('jwt')
          const headers = {
            'x-access-token': jwt
          }
          await this.$axios.$post('/api/wish',
              {
                "title": this.titleInput,
                "author": this.currentUser
              }, {headers}).then(function (response) {
                location.reload()
              }
          )
        }
      }
    }
  },
  mounted() {
    if(process.browser){
      this.currentUser = localStorage.getItem('username')
    }
  }
}
</script>

<style scoped>

</style>
