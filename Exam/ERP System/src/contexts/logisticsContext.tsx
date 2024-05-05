'use client'
import { Logistic } from "@/types/Logistics"
import { ReactNode, createContext, useContext } from "react"

interface LogisticContextProps {
    children: ReactNode
}

type LogisticContextType =
{
    fetchLogistics: () => Promise<Logistic[]>
}


export const LogisticContext = createContext<LogisticContextType>({
    fetchLogistics: async () => []
});

export const useLogisticContext = () => {
    return useContext(LogisticContext);
};


export default function LogisticProvider({ children }: LogisticContextProps) {
    
    const fetchLogistics = async () => {
        let response = await fetch(`/logistics/api/logistics`)

        let logistics = await response.json();
        
        console.log(logistics);

        return logistics
    }


    const contextValue: LogisticContextType = { fetchLogistics };

    return (
      <LogisticContext.Provider value={contextValue}>
        <div>{children}</div>
      </LogisticContext.Provider>
    );
  }