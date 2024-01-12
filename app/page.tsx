"use client"
import { Button } from '@nextui-org/react';
import { ThemeSwitcher } from '../components/utils/ThemeSwitcher';
export default function Page() {
 return (
  <div>
   <h1 className="text-blue-400">App Router</h1>
   <Button>Click me</Button>
   <div className="dark dark:bg-gray-800 dark:text-white bg-white text-black">
    ...
    <div>Text color changes based on theme</div>
   </div>

   <div className="light light:bg-gray-100 light:text-black bg-black text-white">
    <div className="."></div>
    <div>Text color changes based on theme</div>
   </div>

   <ThemeSwitcher />
  </div>
 );
}
