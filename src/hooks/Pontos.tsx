import React, { createContext, useContext, useCallback, useState } from 'react'

interface PedidoData {
  id: number;
  image: string;
  massa: string;
  detalhes: string;
  preco: number;
}

interface Pedido {
  massa: PedidoData;
  borda: PedidoData;
  recheio: PedidoData;
  tamanho: PedidoData;
}

interface PedidoContextData {
  data: Pedido;
  selecionar: (pedido: string, valor: PedidoData) => void;
}

const PedidoContext = createContext<PedidoContextData>({} as PedidoContextData)

const PedidoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [data, setData] = useState(() => {
    let pedido: Pedido = {
      massa: null,
      borda: null,
      recheio: null,
      tamanho: null,
    }

    if (typeof window != 'undefined') {
      pedido = JSON.parse(localStorage.getItem('@Stoom:pedido')) as Pedido
    }

    return pedido as Pedido
  })

  const selecionar = (pedido, valor) => {
    const aux = {
      ...data,
      [pedido]: valor,
    };

    if (typeof window != 'undefined') {
      localStorage.setItem('@Stoom:pedido', JSON.stringify(aux))
    }

    setData(aux)
  };

  return (
    <PedidoContext.Provider value={{ data, selecionar }}>
      {children}
    </PedidoContext.Provider>
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
