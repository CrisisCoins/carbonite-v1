import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link className="hover:underline" href="">
          Github
        </Link>
        <Link className="hover:underline" href="">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-[#313C51] border text-white px-6 py-2 font-medium rounded-md hover:brightness-105 
        hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}
