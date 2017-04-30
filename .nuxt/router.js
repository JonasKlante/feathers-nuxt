'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _38954929 = () => import('/Users/silvestre/Projects/feathers-nuxt/client/pages/index.vue')

const _1157a1ae = () => import('/Users/silvestre/Projects/feathers-nuxt/client/pages/admin/index.vue')

const _18dd6e64 = () => import('/Users/silvestre/Projects/feathers-nuxt/client/pages/about.vue')

const _1bdc2c85 = () => import('/Users/silvestre/Projects/feathers-nuxt/client/pages/admin/protected.vue')



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _38954929,
			name: "index"
		},
		{
			path: "/admin",
			component: _1157a1ae,
			name: "admin"
		},
		{
			path: "/about",
			component: _18dd6e64,
			name: "about"
		},
		{
			path: "/admin/protected",
			component: _1bdc2c85,
			name: "admin-protected"
		}
  ]
})
