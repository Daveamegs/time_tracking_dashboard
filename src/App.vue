<template>
  <main id="main">
    <ProfileBoard />
  </main>
</template>

<script>
import ProfileBoard from './components/ProfileBoard.vue'

export default {
  name: 'App',
  components: {
    ProfileBoard
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
