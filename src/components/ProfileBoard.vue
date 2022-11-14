<template>
  <div id="profile">
    <section class="image-container">
      <img src="../assets/image-jeremy.png" alt="" srcset="">
      <h6 class="report-for">Report for</h6>
      <h1 class="profile-name">Jeremy Robson</h1>
    </section>

    <section class="timeframe">
      <h4 class="daily" 
        @click="getDailyStats()"
        :class="{active : isDaily() }"
        >Daily</h4>

      <h4 class="weekly" 
        @click="getWeeklyStats()"
        :class="{active : isWeekly()}"
        >Weekly</h4>

      <h4 class="monthly" 
        @click="getMonthlyStats()"
        :class="{active: isMonthly()}"
        >Monthly</h4>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProfileBoard',
  props: {
    msg: String
  },

  methods: {
    getDailyStats(){
      this.$store.dispatch("getDailyStats")
    },

    getWeeklyStats(){
      this.$store.dispatch("getWeeklyStats")
    },

    getMonthlyStats(){
      this.$store.dispatch("getMonthlyStats")
    },

    isDaily(){
      if (this.timeFrame == "daily"){
        return true
      }
    },

    isWeekly() {
      if (this.timeFrame == "weekly") {
        return true
      }
    },

    isMonthly() {
      if (this.timeFrame == "monthly") {
        return true
      }
    }
  },

  computed: mapState([
    "timeFrame"
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#profile{
  // flex: 30%;
  background-color: hsl(235, 46%, 20%);
  border-radius: 15px;
  height: 400px;
  margin-right: 20px;

  .image-container{
    height: 260px;
    padding: 20px;
    width: 200px;
    border-radius: 15px;
    background-color: hsl(246, 80%, 60%);
    color: #fff;
  }
  .image-container > img{
    width: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .report-for{
    margin-bottom: 0px;
    margin-top: 35px;
    font-weight: 200;
    color: hsl(236, 33%, 83%);
  }

  .profile-name{
    margin-top: 5px;
    font-size: 2.1em;
    font-weight: 400;
  }


  .timeframe{
    padding: 0 20px;
    color: hsl(235, 45%, 61%);

    .active {
        color: #fff;
      }
    .daily{
      font-weight: 200;
      cursor: pointer;

      &:hover{
        color: #fff;
      }
    }

    .weekly {
      font-weight: 200;
      cursor: pointer;
      
      &:hover {
        color: #fff;
      }
    }

    .monthly{
      font-weight: 200;
      cursor: pointer;
      
      &:hover {
        color: #fff;
      }
    }

  }

}
</style>
