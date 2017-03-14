<template>
  <span id="sede">
    Sede :
    <select v-model='selected'>
      <option v-for='sede in sedi' v-bind:value="sede.id">{{ sede.descrizione }}</option>
    </select>
  </span>
</template>

<script>
export default {
  props: {
    value: String
  },
  computed: {
    selected: {
      get () {
        console.log('selected.get ' + this.value)
        return this.value
      },
      set (value) {
        console.log('selected.set ' + value)
        this.$emit('input', value)
      }
    }
  },
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
</style>
