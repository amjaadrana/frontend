// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'

// function Header() {
//   return (
//     <header className="text-gray-700 bg-slate-300 body-font shadow-sm flex items-center">
//       <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center ">
//         <a 
//         className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
//         >
//           <Image src="/logo.svg" width={100} height={100} alt="logo" />
//           <span className="ml-3 text-sm font-bold text-gray-700">DOCTOR APPOINTMENT</span>
//         </a>
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md:flex hidden flex-wrap items-center text-base justify-center">
//           <a href="/" className="mr-5 hover:text-primary hover:scale-110">
//             Home
//           </a>
//           <a href="/About" className="mr-5 hover:text-primary hover:scale-105">
//             About
//           </a>
//           <a
//             href="/appointment"
//             className="mr-5 hover:text-primary hover:scale-105"
//           >
//             Appointment
//           </a>
//           <a
//             href="/contact"
//             className="mr-5 hover:text-primary hover:scale-105"
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//       <a href="/">
//       <LoginLink><Button className="mr-6">Get Started</Button></LoginLink>
        
//       </a>
//     </header>
//   )
// }

// export default Header

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";



// import HospitalLogo from '../public/hospital-logo.svg'; // replace with your logo file


const {getUser} = getKindeServerSession();
const user = getUser();
// console.log(user);



const Header = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src=" logo.svg" alt="Hospital Logo" width={40} height={40} />
          </Link>
          <h1 className="text-2xl font-bold text-blue-900 ml-4">Hospital Name</h1>
        </div>
        <div className="flex items-center gap-4">

        <ul className="md:flex items-center hidden  ">
          <li className="mr-6">
            <Link href="/">
              <span className="text-blue-900 hover:text-blue-700 transition duration-300">
                Home
              </span>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/explorer">
              <span className="text-blue-900 hover:text-blue-700 transition duration-300">
                Explorer
              </span>
            </Link>
          </li>
          <li>
            
            <Link href="/contact-us">
              <span className="text-blue-900 hover:text-blue-700 transition duration-300">
                Contact Us
              </span>
            </Link>
            
       
          </li>
        </ul>
          
        </div>

        <div>

          {
            user?
            


            <LoginLink>              
              login
              </LoginLink>
            
              : "no"
        // <LogoutLink>Log out</LogoutLink>    
          }

            
            
      
        </div>
        
            
          
      </div>
    </nav>
  );
};

export default Header;

