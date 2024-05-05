"use client";
import { Circular } from "@/types/Circular";
import { ReactNode, createContext, useContext } from "react";

interface CircularContextProps {
  children: ReactNode;
}

type CircularContextType = {
  fetchCirculars: () => Promise<Circular[]>;
};

export const CircularContext = createContext<CircularContextType>({
  fetchCirculars: async () => [],
});

export const useCircularsContext = () => {
  return useContext(CircularContext);
};

export default function CircularProvider({ children }: CircularContextProps) {
  const fetchCirculars = async () => {
    let response = await fetch(`/circulars/api/circulars`);

    let circulars = await response.json();

    console.log(circulars);

    return circulars;
  };

  const contextValue: CircularContextType = { fetchCirculars };

  return (
    <CircularContext.Provider value={contextValue}>
      <div>{children}</div>
    </CircularContext.Provider>
  );
}
