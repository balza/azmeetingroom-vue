<template>
  <div id="sede">
    Sede :
    <select>
      <option v-for='sede in sedi' v-bind:value="sede.id">{{ sede.descrizione }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sedi: [
        { descrizione: 'Brenta', id: 'brenta' },
        { descrizione: 'Oglio', id: 'oglio' },
        { descrizione: 'Corso Italia', id: 'italia' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
