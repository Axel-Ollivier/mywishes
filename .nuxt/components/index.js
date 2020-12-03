export { default as Logo } from '../../components/Logo.vue'
export { default as WishAddForm } from '../../components/WishAddForm.vue'
export { default as LoginForm } from '../../components/loginForm.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as SignupForm } from '../../components/signupForm.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyWishAddForm = import('../../components/WishAddForm.vue' /* webpackChunkName: "components/WishAddForm" */).then(c => c.default || c)
export const LazyLoginForm = import('../../components/loginForm.vue' /* webpackChunkName: "components/loginForm" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
export const LazySignupForm = import('../../components/signupForm.vue' /* webpackChunkName: "components/signupForm" */).then(c => c.default || c)
