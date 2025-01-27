import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logado: false,
  });

  const login = (email, senha) => {
    setUser({
      email,
      logado: true,
    });
  };

  const logout = () => {
    setUser({
      logado: false,
    });
  };

  const register = (email, senha, nome, telefone) => {
    setUser({
      email,
      senha,
      nome,
      telefone,
      logado: true,
    });
  };

  const contexto = {
    user,
    login,
    logout,
    register,
  };
  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
