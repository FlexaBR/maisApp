const PedidosHome = () => import('./../views/PedidosHome.vue')

export default [
  {
    path: 'pedidos',
    component: PedidosHome,
    meta: { requiresAuth: true }
  }
]
// /dashboard/pedidos
