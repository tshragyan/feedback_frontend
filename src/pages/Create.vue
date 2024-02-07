<template>
  <div class="createContainer">
      <input type="text" v-model=obj.name placeholder="name">
      <br>
      <p v-if="errors.name" class="error">{{errors.name}}</p>
      <input type="text" v-model=obj.feedback placeholder="feedback">
      <br>
      <p v-if="errors.feedback" class="error">{{errors.feedback}}</p>
      <button @click="create">create</button>
  </div>
</template>

<script>
export default {
  name: 'CreateFeedback',
  data() {
    return {
      obj: {
        name: '',
        feedback: '',
      },
      errors: {}
    }
  },
  methods : {
    create () {

      this.errors = {}

      if (!this.obj.name || this.obj.name.length > 255) {
        this.errors.name = 'incorrect name'
      }

      if (!this.obj.feedback || this.obj.feedback.length > 255) {
        this.errors.feedback = 'incorrect feedback'
      }

      if (!Object.keys(this.errors).length) {
          this.$store.dispatch('addFeedback', this.obj)
      }
    }
  }
}
</script>
<style>
  .createContainer {
    margin-top: 10px
  }
  .error {
    color: red;
  }
</style>