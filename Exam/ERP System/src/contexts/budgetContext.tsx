'use client'
import { Budget } from "@/types/Budget"
import { ReactNode, createContext, useContext } from "react"

interface BudgetContextProps {
    children: ReactNode
}

type BudgetContextType =
{
    fetchBudgets: () => Promise<Budget[]>
}


export const BudgetContext = createContext<BudgetContextType>({
    fetchBudgets: async () => []
});

export const useBudgetsContext = () => {
    return useContext(BudgetContext);
};


export default function BudgetProvider({ children }: BudgetContextProps) {
    
    const fetchBudgets = async () => {
        let response = await fetch(`/officebudget/api/budget`)

        let budgets = await response.json();
        
        console.log(budgets);

        return budgets
    }


    const contextValue: BudgetContextType = { fetchBudgets };

    return (
      <BudgetContext.Provider value={contextValue}>
        <div>{children}</div>
      </BudgetContext.Provider>
    );
  }