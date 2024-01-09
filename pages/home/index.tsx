import { gql, useMutation, useQuery } from '@apollo/client';

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
 const { loading, error, data } = useQuery<{ users: User[] }>(AllUsersQuery);

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

   <h1 className="text-3xl text-blue-400 font-bold underline">Hello world!</h1>
  </div>
 );
};

export default HomePage;
