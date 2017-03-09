<template>
  <div>
    Piano {{ idSede }}: 
    <select id='piano'>      
      <option v-for="piano in filteredPiani(piani)">{{piano.text}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'piano',
  data () {
    return {
      piani: [
        { text: 'Primo piano', idSede: 'brenta' },
        { text: 'Secondo piano', idSede: 'oglio' },
        { text: 'Seminterrato', idSede: 'italia' }
      ]
    }
  },
  props: ['idSede'],
  methods: {
    filteredPiani: function (piani) {
      var id = this.idSede
      return piani.filter(function (piano) {
        return piano.idSede.match(id)
      })
    }
  }
}
</script>

<style>
</style>
