<template>
  <span>
    Tipo :
    <select v-bind:value="value" v-on:input="filteredTipi($event.target.value)">
      <option v-for="tipo in filteredTipi(tipi)">{{tipo.text}}</option>
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
      tipi: [
        { text: 'Call conference', id: 'call', idSede: 'brenta,oglio' },
        { text: 'Sale riunioni', id: 'riunioni', idSede: 'brenta,oglio' },
        { text: 'Spazio sales', id: 'sales', idSede: 'brenta,oglio' },
        { text: 'Video conference', id: 'video', idSede: 'brenta,italia' },
        { text: 'Video proiettori', id: 'proiettori', idSede: 'brenta,oglio,italia' }
      ]
    }
  },
  methods: {
    filteredTipi: function (tipi) {
      console.log('filteredTipi ' + this.value)
      var id = this.value
      return tipi.filter(function (tipo) {
        return tipo.idSede.match(id)
      })
    }
  }
}
</script>

<style>
</style>

