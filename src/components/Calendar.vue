<template>
  <div id="calendar">
    Calendar
    <span>
      <sede/>  
      <piano idSede='oglio'/> 
    </span>
  </div>
</template>

<script>
  import Sede from './Sede.vue'
  import Piano from './Piano.vue'
  
  export default {
    name: 'calendar',
    components: {
      sede: Sede,
      piano: Piano
    }
  }
</script>

<style>
</style>

