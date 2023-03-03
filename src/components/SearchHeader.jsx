import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings5Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.db1e7D75DxooPIQ4j9mgzAHaBA%26pid%3DApi&f=1&ipt=96a9f1f8687fed22f6c5adc0a9cabcc27ce7ce529e3f640ca8e3b50b71567b0e&ipo=images"
            alt="search header image"
            width={120}
            height={40}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings5Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button
          className="bg-[#6C5A4E] text-white px-6 py-2 
        font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2"
        >
          Sign In
        </button>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
}
