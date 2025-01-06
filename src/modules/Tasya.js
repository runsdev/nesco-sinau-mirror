/*
  Ini punya Tasya
  Semangat Tas!
*/

import Image from "next/image";

export default function Tasya() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
        <div className="mt-[55px] text-[35px]">Tentang</div>
        <div className="text-[35px]">Porsenigama 2024</div>

        <div className="mt-[24px] flex w-full justify-start pl-[200px]">
          <div className="box-border h-[150px] w-[250px] rounded-[15px] border-[3px] border-black p-4" />
        </div>

        <div className="mt-[24px] flex w-full justify-start pl-[200px]">
          <Image src="/images/tenis.png" width={500} height={500} alt="Picture of the author" />
        </div>

        <div className="mt-[100px] flex w-full justify-start pl-[200px]">
          <div className="box-border h-[150px] w-[300px] rounded-[15px]" />
        </div>
      </div>
    </>
  );
}
