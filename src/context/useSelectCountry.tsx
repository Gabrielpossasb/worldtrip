import { createContext, ReactNode, useState } from "react"

interface ListCountry {
   id: number,
   continente: string,
   subDescription: string,
   description: string,
   image: string,
   países: number,
   línguas: number,
   qtdCidades: string,
   cidades: [],
}

interface ApiProviderProps {
   children: ReactNode;
}

interface ApiContextData {
   apiContinent: ListCountry[];
   apiContinentSelect: ListCountry;
   setContinentSelect: ( id: number ) => void;
}

export const ApiContext = createContext<ApiContextData>(
   {} as ApiContextData
);

export function ApiProvider({children}: ApiProviderProps) {
   const apiContinent: ListCountry[] = require('../../cidades.json')

   const [apiContinentSelect, setApiContinentSelect] = useState<ListCountry>(apiContinent[0])

   function setContinentSelect(id: number) {
      const select = apiContinent.filter((data: ListCountry) => {
         return (data.id === id)
      })
      console.log(select)
      setApiContinentSelect(select[0])
   }

   return (
      <ApiContext.Provider value={{apiContinent, apiContinentSelect, setContinentSelect}}>
         {children}
      </ApiContext.Provider>
   );
}