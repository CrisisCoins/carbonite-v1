import HomeHeader from "@/components/HomeHeader";
import HomerSearch from "@/components/HomerSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.db1e7D75DxooPIQ4j9mgzAHaBA%26pid%3DApi&f=1&ipt=96a9f1f8687fed22f6c5adc0a9cabcc27ce7ce529e3f640ca8e3b50b71567b0e&ipo=images"
          alt="site image"
        />

        <HomerSearch/>
      </div>
    </>
  );
}
