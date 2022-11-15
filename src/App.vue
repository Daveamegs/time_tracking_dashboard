<template>
  <main id="main">
    <ProfileBoard />
    <TrackBoard />
  </main>
</template>

<script>
import ProfileBoard from './components/ProfileBoard.vue'
import TrackBoard from './components/TrackBoard.vue'

export default {
  name: 'App',
  components: {
    ProfileBoard,
    TrackBoard
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#main {
  font-family: Rubik, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(226, 43%, 10%);

}

    @media only screen and (max-width: 735px) {
      #main{
        flex-direction: column;
        padding: 60px 15px;
      }

    }
</style>
