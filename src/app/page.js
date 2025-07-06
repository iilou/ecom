'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center  flex-col
      "
        // style={{
        //   backgroundImage: 'url(/cottagecore.jpg)',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   filter: 'blur(1px) brightness(0.9)',
        // }}
        // onClick= {() => router.push('/store')}
      >
        <Image
          src="/cottagecore.jpg"
          alt="Cottagecore Background"
          fill
          className="object-cover object-center brightness-75 fixed top-0 left-0 w-full h-full z-[-1]"
          style={{
            filter: 'brightness(0.9) saturate(0.6)',
          }}
        />
        <div className="text-[64px] font-[100] italic leading-[84px] mt-[120px] text-[#FAF6F0] text-center">
          Welcome to Wings & Teas!
        </div>
        <div className="text-[24px] font-[300] w-[600px] text-center leading-[26px] mb-[100px] text-[#ddd9d2]">
          Pick from our assortment of garden creature themed accessories and perfectly brewed teas.
        </div>
        <div className="w-[210px] h-[40px] flex items-center justify-center bg-[#b59cc0] rounded-[2px] shadow-md hover:scale-[0.95] transition-all duration-150 cursor-pointer text-[#FAF6F0] text-[18px] font-extralight italic mt-[30px]"
          onClick={() => {
            router.push("/store");
          }}
        >
          Shop Now 🛍️
        </div>
      </div>
    </>
  );
}
