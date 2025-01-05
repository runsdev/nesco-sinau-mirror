"use client";

import { useState } from "react";
import Image from "next/image";
import rankings from "./data/rankings.json";
import results from "./data/results.json";
import schedule from "./data/schedule.json";

export default function Nasta() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#006582] via-[#00B5E8] via-55% to-[#EDEACB]">
      {/* Navbar */}
      <nav className="fixed top-4 my-4 flex h-12 w-[90%] items-center justify-between rounded-full bg-white px-4 shadow-xl sm:h-16 md:w-3/4 md:px-6">
        <div className="w-24 sm:w-32 md:w-40">
          <Image
            src="././images/logo-porsenigama.webp"
            alt="Logo Porsenigama"
            className="h-6 w-auto object-contain sm:h-8 md:h-10"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden gap-4 md:gap-7 lg:flex">
          {["Jadwal", "Cabang", "Klasemen", "Kontingen", "Galeri", "Suporter", "FAQ"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-light text-black hover:text-slate-500 md:text-xl"
              >
                {item}
              </a>
            ),
          )}
        </div>
        <div className="hidden lg:flex">
          <button type="submit" className="w-6 sm:w-8 md:w-10">
            <Image
              src="././images/log.svg"
              alt="Log Icon"
              className="h-auto w-full object-contain"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" className="p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="h-5 w-5 md:h-6 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 z-50 w-[90%] rounded-xl bg-white p-4 shadow-xl md:w-3/4 lg:hidden">
          <div className="flex flex-col gap-4">
            {["Jadwal", "Cabang", "Klasemen", "Kontingen", "Galeri", "Suporter", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-light text-black hover:text-slate-500 md:text-xl"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="mt-[100px] flex w-full flex-col-reverse items-center gap-10 px-4 md:mt-[150px] md:gap-[100px] lg:flex-row lg:px-8">
        <div className="flex w-full max-w-[500px] flex-col gap-3">
          {/* Klasemen Section */}
          <div className="rounded-2xl bg-white px-4 py-[3%] md:px-[5%]">
            <h2 className="pb-4 text-lg font-bold md:text-xl">Klasemen Teratas</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm md:text-base">
                    <th className="pr-2">Rank</th>
                    <th>Fakultas</th>
                    <th>🏅</th>
                    <th>🥈</th>
                    <th>🥉</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((ranking) => (
                    <tr key={ranking.rank} className="border-b text-sm md:text-base">
                      <td className="py-2">{ranking.rank}</td>
                      <td>{ranking.fakultas}</td>
                      <td>{ranking.gold}</td>
                      <td>{ranking.silver}</td>
                      <td>{ranking.bronze}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="submit"
              className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm text-black md:px-6 md:text-base"
            >
              Lihat Selengkapnya
            </button>
          </div>

          {/* Jadwal Section */}
          <div className="rounded-2xl bg-white px-4 py-[3%] md:px-[5%]">
            <h2 className="pb-4 text-lg font-bold md:text-xl">Jadwal Selanjutnya</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-center text-sm md:text-base">
                    <th>Cabor</th>
                    <th>Tanggal</th>
                    <th>Match</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((sch) => (
                    <tr
                      key={`${sch.event}-${sch.date}-${sch.match}`}
                      className="border-b text-center text-xs md:text-sm"
                    >
                      <td className="py-2">{sch.event}</td>
                      <td>
                        {sch.date}
                        <br />
                        {sch.time}
                      </td>
                      <td>{sch.match}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="submit"
              className="mt-4 rounded-full bg-yellow-400 px-4 py-2 text-sm text-black md:px-6 md:text-base"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-4 sm:max-w-[400px] md:max-w-[500px]">
          <div className="relative aspect-square w-full">
            <Image
              src="././images/logo-porsenigama.png"
              alt="Logo Porsenigama"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="relative w-full" style={{ aspectRatio: "3/1" }}>
            <Image
              src="././images/text-porsenigama.svg"
              alt="Text Porsenigama"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-10 w-full px-4 md:mt-20">
        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
          {results.map((result) => (
            <div
              key={`${result.sport}-${result.match}-${result.date}`}
              className="min-w-[200px] flex-shrink-0 rounded-xl bg-white md:min-w-[250px]"
            >
              <div className="p-4 text-center">
                <div className="text-lg font-semibold md:text-xl">{result.sport}</div>
                <div className="my-2 text-4xl font-black md:text-5xl">{result.score}</div>
              </div>
              <div className="rounded-b-xl bg-gray-900 p-2 text-center text-xs text-white md:text-sm">
                <div className="text-lg font-semibold md:text-xl">{result.match}</div>
                <div>{result.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cabang Section */}
      <div className="my-20 flex w-full flex-col justify-center px-4 md:my-40 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black md:text-4xl">CABANG</h2>
          <p className="text-4xl font-light md:text-5xl">PERLOMBAAN</p>
        </div>
        <div className="mt-10 flex flex-col gap-5 md:gap-x-3 lg:flex-row">
          {["OLAHRAGA", "KESENIAN"].map((category) => (
            <div
              key={category}
              className="flex w-full flex-col items-center justify-center rounded-[40px] border-[10px] border-white bg-gray-200 p-6 shadow-lg md:border-[20px] md:p-10"
            >
              <div className="mb-5 aspect-square w-16 sm:w-20 md:w-24">
                <Image
                  src={`././images/${category.toLowerCase()}.svg`}
                  alt={category}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-5 text-3xl font-black md:text-4xl">{category}</h3>
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 px-6 py-2 text-sm text-black shadow-lg md:px-8 md:py-3 md:text-base"
              >
                Lihat Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
