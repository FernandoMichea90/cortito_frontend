'use client';

import { createContext } from 'react';

interface AuthState {
      isAuthenticated: boolean;
    user: any; // Considera usar un tipo más específico si es posible
    token: string | null;
    isLoading: boolean;
  }
  
  interface AuthContextType {
    state: AuthState;
    dispatch: React.Dispatch<any>; // Ajusta según lo que esté haciendo tu dispatch
  }
  
  // Proporciona un valor inicial que coincida con la estructura de AuthContextType
  const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
  };
  
  // Usa el valor inicial para definir el contexto  
  export const AuthContext = createContext<AuthContextType>({
    state: initialState, // Asegúrate de que este estado inicial tenga sentido para tu app
    dispatch: () => {}, // Función vacía como placeholder
  });
  