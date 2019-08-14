/**
 * messages to routes
 * crumb is used in breadcrumb
 * @see AppBreadcrumb
 * title is used to update the document.title for update router middleware
 * @sse updateTitle
 */
export default {
  '/dashboard': {
    crumb: 'Início',
    title: 'Bem vindo ao Fullstack Javascript'
  },
  '/dashboard/about': {
    crumb: 'Sobre',
    title: 'Sobre o Fullstack Javascript'
  },
  '/dashboard/orders': {
    crumb: 'Pedidos',
    title: 'Meus Pedidos'
  },
  '/dashboard/orders/:id': {
    crumb: ({ route }) => `${route.params.id}`,
    title: 'Detalhes do Pedido'
  }
}
