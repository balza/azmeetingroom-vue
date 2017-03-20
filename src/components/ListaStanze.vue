<template>
  <div id='listaStanze'>
    <table style="width:100%">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sede</th>
          <th>Piano</th>
          <th>Mattina</th>          
          <th>Pomeriggio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sala in filteredSale(sale)">
          <td>{{ sala.text }}</td>
          <td>{{ sala.sede }}</td>
          <td>{{ sala.piano }}</td>
          <td v-if='sala.liberaMattina == true'>
            <a href='#'><span class="glyphicon glyphicon-ok" style="color:green"></span></a>
          </td>
          <td v-else>
            <a href='#'><span class="glyphicon glyphicon-remove" style="color:red"></span></a>
          </td>
          <td v-if='sala.liberaPomeriggio == true'>
            <a href='#'><span class="glyphicon glyphicon-ok" style="color:green"></span></a>
          </td>
          <td v-else>
            <a href='#'><span class="glyphicon glyphicon-remove"style="color:red"></span></a>
          </td>
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
        { text: 'Sala 109', id: '113', idSede: 'oglio', sede: 'Oglio', piano: 1, liberaMattina: true, liberaPomeriggio: true },
        { text: 'Sala 118', id: '118', idSede: 'oglio', sede: 'Oglio', piano: 1, liberaMattina: false, liberaPomeriggio: true },
        { text: 'Sala 122', id: '122', idSede: 'oglio', sede: 'Oglio', piano: 1, liberaMattina: true, liberaPomeriggio: false },
        { text: 'Sale Frigessi', id: 'frigessi', idSede: 'italia', sede: 'Corso Italia', piano: 0, liberaMattina: true, liberaPomeriggio: false },
        { text: 'Sala Rita Levi Montalcini', id: 'srlm', idSede: 'brenta', sede: 'Oglio', piano: 1, liberaMattina: false, liberaPomeriggio: false }
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
  th {
    padding-top: 1cm;
    text-align: center;
    width: 200px;
  }
  td {
    padding-top: 0.5cm;
    text-align: center;
    width: 200px;
  }
</style>

