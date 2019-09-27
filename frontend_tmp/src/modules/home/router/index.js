const Home = () => import('./../views/Home.vue')
const Contact = () => import('./../views/Contact.vue')

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  }
]
