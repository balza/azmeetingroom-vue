// import Vue from 'vue'
import ListaStanze from '../../../src/components/ListaStanze.vue'

describe('ListaStanze', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    console.log(typeof ListaStanze.methods.filteredSale)
    expect(typeof ListaStanze.methods.filteredSale).to.equal('function')
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
