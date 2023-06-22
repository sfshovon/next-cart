import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const menuItems = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/api_products">API Products</Link></li>
      <li><Link href="/products">Own Products</Link></li>
      <li><Link href="/register">Login</Link></li>
    </>
  );

  return (
    <div className="navbar bg-slate-100 grid grid-cols-12 top-0 z-50">
      <div className="flex justify-start col-span-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FiMenu className="h-5 w-5" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold">
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center">
          <Link href="/" className="btn btn-ghost normal-case text-xl">NextCart</Link>
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center col-span-12 lg:col-span-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full border-2 border-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 bg-white"
        />
      </div>
      <div className="flex-none col-span-3 lg:col-span-4 justify-end items-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
