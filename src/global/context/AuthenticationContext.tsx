import React, { createContext, ReactNode, useState } from 'react';

interface Context {
    isAuthenticated: boolean;
}

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext({} as Context);

export function AuthProvider({children}: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}
