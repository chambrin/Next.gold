import { Button } from '@nextui-org/react';
import { FaHouse } from "react-icons/fa6";


export default function Sidebar() {
 return (
  <nav className="text-white bg-gray-900 pt-24 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out">
   <Button color="primary" className="w-full text-left">
    <FaHouse />
    Dashboard
   </Button>
  </nav>
 )
}