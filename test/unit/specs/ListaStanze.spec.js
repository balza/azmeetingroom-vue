import Vue from 'vue'
import ListaStanze from '../../../src/components/ListaStanze.vue'

const testDataArr = []

const getTestData = function () {
  return [
    { id: 1, text: 'Sala 109', idSede: 'oglio', sede: 'Oglio', piano: 1, liberaMattina: true, liberaPomeriggio: true },
    { id: 2, text: 'Sala 118', idSede: 'oglio', sede: 'Oglio', piano: 1, liberaMattina: false, liberaPomeriggio: true },
    { id: 3, text: 'Sala 122', idSede: 'oglio', sede: 'Oglio', piano: 1, liberaMattina: true, liberaPomeriggio: false },
    { id: 4, text: 'Sale Frigessi', idSede: 'italia', sede: 'Corso Italia', piano: 0, liberaMattina: true, liberaPomeriggio: false },
    { id: 5, text: 'Sala Rita Levi Montalcini', idSede: 'brenta', sede: 'Oglio', piano: 1, liberaMattina: false, liberaPomeriggio: false }
  ]
}

getTestData().forEach(cur => {
  Object.keys(cur).forEach(prop => {
    testDataArr.push(cur[prop].toString())
  })
})

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('ListaStanze', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    console.log(typeof ListaStanze.methods.filteredSale)
    expect(typeof ListaStanze.methods.filteredSale).to.equal('function')
  })

  it('rendering data is correct', () => {
    expect(getRenderedText(ListaStanze, { idSede: 'italia' })).to.equals('Nome Sede Piano Mattina Pomeriggio Sala 109 Oglio 1  Sala 118 Oglio 1  Sala 122 Oglio 1  Sale Frigessi Corso Italia 0  Sala Rita Levi Montalcini Oglio 1  ')
  })

  // Evaluate the results of functions in
  // the raw component options
  // it('sets the correct default data', () => {
  //   expect(typeof ListaStanze.data).to.equal('function')
  //   const defaultData = ListaStanze.data()
  //   console.log(ListaStanze.data())
  //   console.log(ListaStanze.data().sale)
  //   console.log(typeof ListaStanze.data().sale)
  //   console.log(Array.isArray(ListaStanze.data()))
  //   expect(typeof defaultData).to.equal('array')
  // })
  // Inspect the component instance on mount
  // it('correctly sets the message when created', () => {
  //   const vm = new Vue(ListaStanze).$mount()
  //   expect(vm.message).to.equal('bye!')
  // })
  // Mount an instance and inspect the render output
  // it('renders the correct message', () => {
  //   const Ctor = Vue.extend(ListaStanze)
  //   const vm = new Ctor().$mount()
  //   expect(vm.$el.textContent).to.equal('bye!')
  // })
})
