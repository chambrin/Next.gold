"use client"
import { Button } from '@nextui-org/react';
import { ThemeSwitcher } from '../components/utils/ThemeSwitcher';



export default function Page() {

 return (
  <div>
   <h1 className="text-blue-400">App Router</h1>
   <Button color="primary">
    Primary
   </Button>
   <div>
    <h1>Users</h1>


    <h2>Create User</h2>

    <h1 className="text-3xl font-bold text-blue-400 underline">Hello world!</h1>

    <ThemeSwitcher />
   </div>
  </div>
 );
}
