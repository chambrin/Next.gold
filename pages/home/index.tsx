import { useState, FormEvent } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

interface User {
 id: string;
 name: string;
 email: string;
}

const AllUsersQuery = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

const HomePage = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');

 const { loading, error, data } = useQuery<{ users: User[] }>(AllUsersQuery);

 const router = useRouter();


 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error :(</p>;

 return (
  <div>
   <h1>Users</h1>
   {data?.users.map((user) => (
    <div key={user.id}>
     <p>Name: {user.name}</p>
     <p>Email: {user.email}</p>
    </div>
   ))}

   <h2>Create User</h2>

  </div>
 );
};

export default HomePage;
