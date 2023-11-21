//To Do: catch error


import {createContext} from "react";
import {useEffect, useState} from "react";

export const UserContext =  createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userErrorMessage, setUserErrorMessage] = useState(null)

  useEffect(() => {
    fetch("/user/:userID")
      .then((response) => response.json())
      .then(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, userErrorMessage }}>
      {children}
    </UserContext.Provider>
  );
};
