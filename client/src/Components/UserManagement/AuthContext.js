import React, { useState, useEffect, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) { 
  const [authUser, setAuthUserState] = useState(null);
  const [isLoggedIn, setIsLoggedInState] = useState(null);

  useEffect(() => {
    const storedAuthUser = JSON.parse(localStorage.getItem('authUser'));
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (storedAuthUser && storedIsLoggedIn) {
      setAuthUserState(storedAuthUser);
      setIsLoggedInState(storedIsLoggedIn);
    }
  }, []);

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
