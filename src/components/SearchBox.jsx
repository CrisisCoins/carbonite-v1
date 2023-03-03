"use client";
import { useSearchParams, useRouter  } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { HiMicrophone } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }


  return (
    <form className="flex border order-slate-300 
    rounded-md shadow-lg px-6 py-3 ml-10 mr-5 
    flex-grow max-w-3xl items-center" 
    onSubmit={handleSubmit}>
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="Enter Search Query Here..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}/>

      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}/>

      <HiMicrophone
        className="hidden sm:inline-flex text-4xl
        text-[#191919] pl-4 border-l-2 border-slate-300 
        mr-3"/>

      <AiOutlineSearch className="text-2xl hidden sm:inline-flex
       text-[#191919] cursor-pointer" 
       onClick={handleSubmit}/>
    </form>
  );
}
