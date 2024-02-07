<template>
  <div>
    <p>
      <router-link to="/">List</router-link>
    </p>
    <router-link to="/create">Create</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
