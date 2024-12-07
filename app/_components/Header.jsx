import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
              <Link href="/admin/dashboard">
                <span className="text-blue-900 hover:text-blue-700 transition duration-300">
                  Admin Dashboard
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
          {user ? (
            <LogoutLink>
              <Button variant="outline">Log out</Button>
            </LogoutLink>
          ) : (
            <LoginLink>
              <Button>Get Started</Button>
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
