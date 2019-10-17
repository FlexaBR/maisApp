import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Home',
          path: 'home',
          component: () => import('@/views/pages/Home')
        },
        {
          name: 'Analise',
          path: 'analise',
          component: () => import('@/views/pages/Analise')
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Login')
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register')
        }
      ]
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/views/dashboard/Dashboard')
        },

         // Cadastros
         {
          name: 'Cadastro de Perfis',
          path: 'cadastros/perfil/frmPerfil',
          component: () => import('@/views/dashboard/cadastros/perfil/frmPerfil')
        },
        {
          name: 'Cadastro de Usuários',
          path: 'cadastros/usuario/frmUsuario',
          component: () => import('@/views/dashboard/cadastros/usuario/frmUsuario')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error')
        }
      ]
    }
  ]
})
