<template>
  <div id="calendar">
    Calendar
    <span>
      <sede v-model="idSede"/>  
      <piano v-bind:value='idSede'/> 
      <tipo v-bind:value='idSede'/>
      <listaStanze v-bind:value='idSede'/>
    </span>
  </div>
</template>

<script>
  import Sede from './Sede.vue'
  import Piano from './Piano.vue'
  import Tipo from './Tipo.vue'
  import ListaStanze from './ListaStanze.vue'
  
  export default {
    name: 'calendar',
    data () {
      return {
        idSede: null
      }
    },
    components: {
      sede: Sede,
      piano: Piano,
      tipo: Tipo,
      listaStanze: ListaStanze
    }
  }
</script>

<style>
</style>

