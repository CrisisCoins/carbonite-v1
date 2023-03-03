"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";

export default function HomerSearch() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        if(!input.trim()) return;

        router.push(`/search/web?searchTerm=${input}`);
    }

    async function randomSearch() {
        setRandomSearchLoading(true);
        const response = await 
            fetch("https://random-word-api.herokuapp.com/word")
                .then((res) => res.json())
                .then((data) => data[0]);
                if(!response) return;
                router.push(`/search/web?searchTerm=${response}`);
                setRandomSearchLoading(false);
    }

  return (
    <>
      <form onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%]
        border border-[#C9C9C9] px-5 py-3 rounded-md
        hover:shadow-md focus-within:shadow-md transition-shadow
        sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch onClick={handleSubmit} className="text-xl text-gray-500 mr-3" />
        <input
          className="flex-grow focus:outline-none"
          type="text"
          placeholder="Enter Search Query Here..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <HiMicrophone className="text-lg" />
      </form>

      <div
        className="flex flex-col space-y-2 sm:space-y-0 
        sm:space-x-4 justify-center sm:flex-row mt-8"
      >
        <button onClick={handleSubmit} className="btn">Carbonite Search</button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}