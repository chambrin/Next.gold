'use client';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

interface RootLayoutProps {
 children: React.ReactNode;
}

const DashboardLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps): ReactElement => {
 const [user, setUser] = useState<any>();
 const router = useRouter();

 useEffect(() => {
  const userData = Cookie.get('user');
  console.log(userData);
  if (userData) {
   setUser(JSON.parse(userData));
  } else {
   // Si le cookie n'est pas présent, rediriger vers la page de connexion
   router.push('/login');
  }
 }, [router]);

 useEffect(() => {
  if (user && user.role !== 'ADMIN') {
   // Si le rôle de l'utilisateur n'est pas "ADMIN", rediriger vers une autre page
   router.push('/');
  }
 }, [router, user]);

 return (
  <div>
   <h1>Tableau de bord</h1>
   {user ? (
    <p>Vous êtes connecté en tant que {user.name}</p>
   ) : (
    <p>Veuillez vous connecter pour accéder à cette page.</p>
   )}
   {children}
  </div>
 );
};

export default DashboardLayout;
