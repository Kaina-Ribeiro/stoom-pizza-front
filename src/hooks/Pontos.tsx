import React, { createContext, useContext, useState } from 'react'

interface Ponto {
  id: number;
  ponto: number;
}

interface PontoContext {
  data: Ponto[];
  adicionarPontos: (pontos: number) => void;
  somaPontos: () => number;
}

const PontoContext = createContext<PontoContext>({} as PontoContext)

const PontosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  let i = 0;
  const [data, setData] = useState(() => {
    let pontos: Ponto[] = []

    if (typeof window != 'undefined') {
      pontos = JSON.parse(localStorage.getItem('@Stoom:ponto')) as Ponto[]

      if (pontos) {
        i = pontos.length - 1;
      }
    }

    return pontos || []
  })

  const adicionarPontos = (val) => {
    const aux = data;
    aux.push({
      id: ++i,
      ponto: val,
    });

    if (typeof window != 'undefined') {
      localStorage.setItem('@Stoom:ponto', JSON.stringify(aux));
    }

    setData(aux);
  };

  const somaPontos = () => {
    const a = data;
    let sum = 0;

    for (const key in a) {
      if (a[key]?.ponto) {
        sum += a[key]?.ponto;
      }
    }
    return sum;
  }

  return (
    <PontoContext.Provider value={{ data, adicionarPontos, somaPontos }}>
      {children}
    </PontoContext.Provider>
  )
}

function usePontos(): PontoContext {
  const context = useContext(PontoContext)

  if (!context) {
    throw new Error('usePontos must be used within a PontosProvider')
  }

  return context
}

export { PontosProvider, usePontos }
