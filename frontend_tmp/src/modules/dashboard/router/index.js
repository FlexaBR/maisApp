import financesRoutes from './../modules/finances/router'
import pedidosRoutes from './../modules/pedidos/router'

const Dashboard = () => import('./../views/Dashboard.vue')

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      ...financesRoutes,
      ...pedidosRoutes
    ]
  }
]
