"use client";

import { useContext, createContext, useState, useEffect } from "react";

const ListContext = createContext([]);

export default function ListProvider({ children }) {
  const [list, setList] = useState([
    { name: "sda", status: false },
    { name: "amaraa", status: true },
  ]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
}

export const useList = () => useContext(ListContext);
