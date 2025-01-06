/* eslint-disable react/no-unescaped-entities */
/*
  Ini punya Tasya
  Semangat Tas!
*/

import Image from "next/image";

export default function Tasya() {
  return (
    <>
      {/* Judul Section */}
      <div className="flex min-h-[150vh] w-full flex-col items-center bg-white">
        <div className="mt-[55px] font-piximisa text-[45px]">Tentang</div>
        <div className="font-primeformRegular text-[50px]">Porsenigama 2024</div>
        <div className="absolute left-[0px] top-[2290px]">
          {/* komponen awan */}
          <Image src="/images/awan1.png" width={150} height={200} alt="Picture of the author" />
        </div>
        <div className="absolute right-[0px] top-[2350px]">
          <Image src="/images/awan2.png" width={150} height={200} alt="Picture of the author" />
        </div>

        {/* Teaser Porsenigama */}
        <div className="relative mt-[50px] flex w-full justify-start pl-[200px]">
          <div className="box-border h-[250px] w-[400px] rounded-[15px] border-[3px] border-black p-4" />
          <div className="absolute left-[250px] top-[50px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/unroADBN_cg"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute left-[90px] top-[150px]">
            {/* Komponen catur & tenis */}
            <Image src="/images/tenis.png" width={200} height={250} alt="Picture of the author" />
          </div>
          <div className="absolute left-[500px] top-[180px]">
            <Image src="/images/catur1.png" width={150} height={200} alt="Picture of the author" />
          </div>

          {/* Deskripsi Porsenigama */}
          <div className="ml-[100px] box-border flex h-[350px] w-[400px] justify-center bg-white p-4">
            <p className="text-justify font-primeformRegular text-[18px] text-black">
              Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) adalah ajang olahraga
              dan seni tahunan yang melibatkan kontingen dari berbagai Fakultas dan Sekolah di UGM.
              <br />
              <br />
              Acara ini diselenggarakan berdasarkan RKAT atau program FORKOM UKM UGM. Tahun ini,
              Porsenigama mengusung tema "Kembara Jagaddhita" dan tagline "Genggam Gemerlap Talenta
              Gadjah Mada.
            </p>
          </div>
        </div>

        {/* Kontingen & Supporter */}
        <div className="absolute left-[150px] top-[2900px]">
          <Image src="/images/kontingen.png" width={450} height={500} alt="Picture of the author" />
        </div>
        <div className="absolute left-[700px] top-[2900px]">
          <Image src="/images/supporter.png" width={450} height={500} alt="Picture of the author" />
        </div>
      </div>
    </>
  );
}
