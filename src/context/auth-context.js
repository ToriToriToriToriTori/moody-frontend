import { createContext } from 'react';

export const AuthContext = createContext({
  AuthStatus: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});