import React, { useState, useEffect, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) { 
  const [authUser, setAuthUserState] = useState(
    () => {
      const savedAuthUser = localStorage.getItem('authUser');
      return savedAuthUser ? JSON.parse(savedAuthUser) : null;
    }
  );
  const [isLoggedIn, setIsLoggedInState] = useState(() => {
    const savedLoginState = localStorage.getItem("isLoggedIn");
    return savedLoginState ? JSON.parse(savedLoginState) : null;
  });

  // useEffect(() => {
  //   const storedAuthUser = JSON.parse(localStorage.getItem('authUser'));
  //   const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  //   if (storedAuthUser && storedIsLoggedIn) {
  //     setAuthUserState(storedAuthUser);
  //     setIsLoggedInState(storedIsLoggedIn);
  //   }
  // }, []);

  const setAuthUser = (userData) => {
    localStorage.setItem('authUser', JSON.stringify(userData));
    setAuthUserState(userData);
  };

  const setIsLoggedIn = (loggedIn) => {
    localStorage.setItem('isLoggedIn', loggedIn);
    setIsLoggedInState(loggedIn);
  };

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
