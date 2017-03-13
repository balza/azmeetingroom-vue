<template>
  <div>
    Piano : 
    <select v-bind:value="value" v-on:input="filteredPiani($event.target.value)">      
      <option v-for="piano in filteredPiani(piani)">{{piano.text}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: null
  },
  data () {
    return {
      piani: [
        { text: 'Primo piano', idSede: 'brenta' },
        { text: 'Secondo piano', idSede: 'oglio' },
        { text: 'Seminterrato', idSede: 'italia' }
      ]
    }
  },
  computed: {
    updateValue: {
      get () {
        console.log('idSede' + this)
      },
      set () {
        console.log('idSede' + this)
      }
    }
  },
  methods: {
    filteredPiani: function (piani) {
      console.log('filteredPiani ' + this.value)
      var id = this.value
      return piani.filter(function (piano) {
        return piano.idSede.match(id)
      })
    }
  }
}
</script>

<style>
</style>
