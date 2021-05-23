import React, { createContext, useContext, useCallback, useState } from 'react'

interface Pedido {
  massa?: {
    title: string
    preco: number
  }
  borda?: {
    title: string
    preco: number
  }
  recheio?: {
    title: string
    preco: number
  }
  tamanho?: {
    title: string
    preco: number
  }
}

interface PedidoContextData {
  data: Pedido
}

const PedidoContext = createContext<PedidoContextData>({} as PedidoContextData)

const PedidoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [data, setData] = useState(() => {
    let pedido: Pedido = {}

    if (typeof window != 'undefined') {
      pedido = JSON.parse(localStorage.getItem('@Stoom:pedido')) as Pedido
    }

    return pedido as Pedido
  })

  return (
    <PedidoContext.Provider value={{ data }}>{children}</PedidoContext.Provider>
  )
}

function usePedido(): PedidoContextData {
  const context = useContext(PedidoContext)

  if (!context) {
    throw new Error('usePedido must be used within a PedidoProvider')
  }

  return context
}

export { PedidoProvider, usePedido }
