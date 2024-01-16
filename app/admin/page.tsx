'use client'
import PostList from '../../components/admin/PostList';
import UserList from '../../components/admin/UserList';

export default function AdminPage() {
 return (
  <div className="grid grid-cols-5 gap-4 ">
   <div className="col-span-3">
   <PostList/>
   </div>
   <div className="col-span-2">
    <UserList/>
   </div>
  </div>
 );
}
