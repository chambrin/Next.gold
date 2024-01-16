import { AllUsersQuery } from '../../graphql/query/ALLUsersQuery';
import { useQuery } from '@apollo/client';

interface User {
 id: string;
 name: string;
 email: string;
}

interface UsersData {
 users: User[];
}

export default function UserList() {
 const { loading, error, data } = useQuery<UsersData>(AllUsersQuery);
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error :(</p>;

 return (
  <div>
   {data?.users.map((user) => (
    <div key={user.id}>
     <p>Name: {user.name}</p>
     <p>Email: {user.email}</p>
    </div>
   ))}
  </div>
 )
}
