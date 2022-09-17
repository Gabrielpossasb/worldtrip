import { createContext, ReactNode, useState } from "react"

interface ListCountry {
   continente: string,
   image: string,
   países: number,
   línguas: number,
   qtdCidades: number,
   cidades: [],
}

interface ApiProviderProps {
   children: ReactNode;
}

interface ApiContextData {
   apiContinent: ListCountry[];
   apiContinentSelect: ListCountry;
   setContinentSelect: ( id: string ) => void;
}

export const ApiContext = createContext<ApiContextData>(
   {} as ApiContextData
);

export function ApiProvider({children}: ApiProviderProps) {
   const apiContinent: ListCountry[] = require('../../cidades.json')

   const [apiContinentSelect, setApiContinentSelect] = useState<ListCountry>(apiContinent[0])

   function setContinentSelect(id: string) {
      const select = apiContinent.filter((data: ListCountry) => {
         return (data.continente === id)
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