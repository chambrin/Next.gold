'use client';
import React, { FC, ReactElement,useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/admin/Sidebar';

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
  <div className="h-screen flex bg-gray-800">
   {/* Sidebar div */}
   <div className="w-64 p-6 flex-shrink-0 border-1 border-r border-gray-700">
    {/* Sidebar content */}
    <Sidebar />
   </div>

   {/* Content div */}
   <div className="flex flex-col flex-grow overflow-hidden">

    {/* Top bar */}
    <header className="px-6 py-4 flex-shrink-0  border-b border-gray-700">
     {/* Top bar content */}
    </header>

    {/* Content area */}
    <main className="px-6 text-white py-8 overflow-x-hidden overflow-y-auto flex-grow">
     {children}
    </main>
   </div>
  </div>


 );
};

export default DashboardLayout;
