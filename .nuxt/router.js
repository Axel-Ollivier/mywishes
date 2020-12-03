import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _be1c0c5a = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _a89430ec = () => interopDefault(import('../pages/userWishes.vue' /* webpackChunkName: "pages/userWishes" */))
const _309d4978 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _be1c0c5a,
    name: "account"
  }, {
    path: "/userWishes",
    component: _a89430ec,
    name: "userWishes"
  }, {
    path: "/",
    component: _309d4978,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
