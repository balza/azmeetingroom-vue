<template>
  <div>
      <b-nav tabs>
        <b-nav-item><router-link to="/calendar">Calendar</router-link></b-nav-item>
        <b-nav-item><router-link to="/administration">Administration</router-link></b-nav-item>
      </b-nav>
      <router-view></router-view>
  </div>
</template>

<script>
  import Nav from 'bootstrap-vue/components/nav.vue'
  import NavItem from 'bootstrap-vue/components/nav-item.vue'
  
  export default {
    name: 'navtabs',
    components: {
      bNav: Nav,
      bNavItem: NavItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
