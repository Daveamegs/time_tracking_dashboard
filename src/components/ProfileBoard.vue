<template>
  <div class="profile">
    <section>
      <img src="../assets/image-jeremy.png" alt="" srcset="">
      <h4>Report for</h4>
      <h1>Jeremy Robson</h1>
    </section>

    <section>
      <h4>Daily</h4>
      <h4>Weekly</h4>
      <h4>Monthly</h4>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileBoard',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
