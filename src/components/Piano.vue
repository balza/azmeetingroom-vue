<template>
  <span>
    Piano : 
    <select v-bind:value="value" v-on:input="filteredPiani($event.target.value)">      
      <option v-for="piano in filteredPiani(piani)">{{piano.text}}</option>
    </select>
  </span>
</template>

<script>
export default {
  props: {
    value: String
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
