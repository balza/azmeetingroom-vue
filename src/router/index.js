import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Calendar from '@/components/Calendar'
import Administration from '@/components/Administration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/calendar',
          name: 'Clendar',
          component: Calendar
        },
        {
          path: '/administration',
          name: 'Administration',
          component: Administration
        }
      ]
    }
  ]
})
