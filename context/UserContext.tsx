import React, { createContext, useState, useEffect } from 'react';
import Cookie from 'js-cookie';

type User = {
 id: string;
 name: string;
 email: string;
 role: string;
};

type UserContextType = {
 user: User | null;
 setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
 children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
 const [user, setUser] = useState<User | null>(null);

 useEffect(() => {
  // Récupérer l'utilisateur stocké dans le cookie lors de l'initialisation
  const userCookie = Cookie.get('user');
  console.log('Cookie:', userCookie);

  if (userCookie && isJsonString(userCookie)) {
   const userData = JSON.parse(userCookie) as User;
   console.log('User Data:', userData);
   setUser(userData);
  }
 }, []);


 return (
  <UserContext.Provider value={{ user, setUser }}>
   {children}
  </UserContext.Provider>
 );
};

// Fonction pour vérifier la validité d'une chaîne JSON
function isJsonString(str: string) {
 try {
  JSON.parse(str);
 } catch (e) {
  return false;
 }
 return true;
}
