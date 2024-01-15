import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function UserIs() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const { user } = context;

  if (user) {
    return (
     <div>
       <h2>Utilisateur connecté</h2>
       <p>Nom: {user.name}</p>
       <p>Email: {user.email}</p>
       <p>Rôle: {user.role}</p>
     </div>
    )
  } else {
    return <p>Aucun utilisateur connecté</p>
  }
}
