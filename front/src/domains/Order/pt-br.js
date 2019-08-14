export default {
  id: {
    label: 'Pedidos',
    form: 'Pedido'
  },
  amount: {
    label: 'R$'
  },
  payments: {
    label: 'Meio'
  },
  status: {
    label: 'Status',
    WAITING: 'Aguardando Pagamento',
    PAID: 'Pedido Pago',
    NOT_PAID: 'Pedido Aberto',
    REVERTED: 'Pedido Estornado'
  },
  createdAt: {
    label: 'Data'
  },
  customer: {
    label: 'Cliente',
    ownId: {
      label: 'Wirecard ID'
    },
    details: 'Dados do Comprador',
    name: 'Nome',
    address: 'Endereço de Entrega'
  },
  separator: {
    label: 'Detalhes do Pedido'
  }
}
