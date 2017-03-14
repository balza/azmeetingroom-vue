<template>
  <div>
    <table style="width:100%">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sala in filteredSale(sale)">
          <td>{{ sala.id }}</td>
          <td>{{ sala.text }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data () {
    return {
      sale: [
        { text: 'Sala 113', id: '113', idSede: 'oglio' },
        { text: 'Sale Frigessi', id: 'frigessi', idSede: 'italia' },
        { text: 'Sala Rita Levi Montalcini', id: 'srlm', idSede: 'brenta' }
      ]
    }
  },
  methods: {
    filteredSale: function (sale) {
      console.log('filteredSale ' + this.value)
      var id = this.value
      return sale.filter(function (sala) {
        return sala.idSede.match(id)
      })
    }
  }
}
</script>

<style>
</style>

