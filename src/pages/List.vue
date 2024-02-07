<template>
  <div>
      List

      <p v-for="(feedback, index) in feedbacks" :key="index">name: {{feedback.name}}  feedback : {{feedback.feedback}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListFeedback',

  computed: {
    feedbacks() {
      return this.$store.getters.getFeedbacks
    }
  }

}
</script>
