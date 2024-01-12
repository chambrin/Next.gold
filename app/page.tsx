"use client"
import { Button } from '@nextui-org/react';
import { ThemeSwitcher } from '../components/utils/ThemeSwitcher';
import { gql, useQuery } from '@apollo/client';

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

export default function Page() {
 const { loading, error, data } = useQuery<{ users: User[] }>(AllUsersQuery);
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error :(</p>;

 return (
  <div>
   <h1 className="text-blue-400">App Router</h1>
   <Button>Click me</Button>
   <div>
    <h1>Users</h1>
    {data?.users.map((user) => (
     <div key={user.id}>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
     </div>
    ))}

    <h2>Create User</h2>

    <h1 className="text-3xl font-bold text-blue-400 underline">Hello world!</h1>

    <ThemeSwitcher />
   </div>
  </div>
 );
}
