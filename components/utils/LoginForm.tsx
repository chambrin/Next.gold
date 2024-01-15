'use client'
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';


const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            name
            email
            role
        }
    }
`;

const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [login, { data }] = useMutation(LOGIN_MUTATION);
 const router = useRouter();

 const handleSubmit = async () => {
  try {
   const response = await login({ variables: { email, password } });
   const userRole = response.data.login.role;

   // Créer un cookie avec les informations de l'utilisateur
   Cookie.set('user', JSON.stringify(response.data.login), { path: '/' });

   if (userRole === 'ADMIN') {
    router.push('/admin');
   } else {
    router.push('/');
   }
  } catch (error) {
   console.error(error);
   // Affichez l'erreur à l'utilisateur ou gérez là comme vous le souhaitez.
  }
 };

 return (
  <form
   onSubmit={(event) => {
    event.preventDefault();
    handleSubmit();
   }}
   className="max-w-lg mx-auto p-4"
  >
   <label className="block mb-2">
    Email:
    <input
     type='email'
     value={email}
     onChange={(event) => setEmail(event.target.value)}
     required
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
   </label>
   <label className="block mb-2">
    Password:
    <input
     type='password'
     value={password}
     onChange={(event) => setPassword(event.target.value)}
     required
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
   </label>
   <input
    type="submit"
    value="Log in"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
   />
  </form>
 );
}

export default LoginForm;
