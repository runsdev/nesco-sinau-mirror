"use client";

import Image from "next/image";
import { useState } from "react";
import rankings from "./data/rankings.json";
import results from "./data/results.json";
import schedule from "./data/schedule.json";

export default function Nasta() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#006582] via-[#00B5E8] via-55% to-[#EDEACB]">
      <nav className="fixed top-4 my-4 flex h-16 w-3/4 items-center justify-between rounded-full bg-white px-6 shadow-xl">
        <div>
          <Image
            src="/images/logo-porsenigama.webp"
            alt="Logo Porsenigama"
            layout="responsive"
            className="h-[40px] w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-7 md:flex">
          <a href="#jadwal" className="text-xl font-light text-black hover:text-slate-500">
            Jadwal
          </a>
          <a href="#cabang" className="text-xl font-light text-black hover:text-slate-500">
            Cabang
          </a>
          <a href="#klasemen" className="text-xl font-light text-black hover:text-slate-500">
            Klasemen
          </a>
          <a href="#kontingen" className="text-xl font-light text-black hover:text-slate-500">
            Kontingen
          </a>
          <a href="#galeri" className="text-xl font-light text-black hover:text-slate-500">
            Galeri
          </a>
          <a href="#suporter" className="text-xl font-light text-black hover:text-slate-500">
            Suporter
          </a>
          <a href="#faq" className="text-xl font-light text-black hover:text-slate-500">
            FAQ
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="hidden md:block">
          <button type="button">
            <Image src="/images/log.svg" alt="Log Icon" width={24} height={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 w-3/4 rounded-xl bg-white p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#jadwal" className="text-xl font-light text-black hover:text-slate-500">
              Jadwal
            </a>
            <a href="#cabang" className="text-xl font-light text-black hover:text-slate-500">
              Cabang
            </a>
            <a href="#klasemen" className="text-xl font-light text-black hover:text-slate-500">
              Klasemen
            </a>
            <a href="#kontingen" className="text-xl font-light text-black hover:text-slate-500">
              Kontingen
            </a>
            <a href="#galeri" className="text-xl font-light text-black hover:text-slate-500">
              Galeri
            </a>
            <a href="#suporter" className="text-xl font-light text-black hover:text-slate-500">
              Suporter
            </a>
            <a href="#faq" className="text-xl font-light text-black hover:text-slate-500">
              FAQ
            </a>
          </div>
        </div>
      )}

      <div className="mt-[120px] flex flex-col gap-[100px] px-4 md:flex-row md:px-0">
        <div className="flex w-full flex-col gap-3 md:w-[500px]">
          <div className="rounded-2xl bg-white px-[5%] py-[3%]">
            <h2 className="pb-4 text-xl font-bold">Klasemen Teratas</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Rank</th>
                    <th>Fakultas</th>
                    <th>🏅</th>
                    <th>🥈</th>
                    <th>🥉</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((ranking) => (
                    <tr key={ranking.fakultas} className="border-b">
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
            <button type="button" className="mt-4 rounded-full bg-yellow-400 px-6 py-2 text-black">
              Lihat Selengkapnya
            </button>
          </div>

          <div className="rounded-2xl bg-white px-[5%] py-[3%]">
            <h2 className="pb-4 text-xl font-bold">Jadwal Selanjutnya</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-center">
                    <th>Cabor</th>
                    <th>Tanggal</th>
                    <th>Match</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((sch) => (
                    <tr
                      key={`${sch.event}-${sch.date}-${sch.match}`}
                      className="border-b text-center text-sm"
                    >
                      <td>{sch.event}</td>
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
            <button type="button" className="mt-4 rounded-full bg-yellow-400 px-6 py-2 text-black">
              Lihat Selengkapnya
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/logo-porsenigama.png"
            alt="Logo Porsenigama"
            width={300}
            height={300}
            className="w-[200px] md:w-[300px]"
          />
          <Image
            src="/images/text-porsenigama.svg"
            alt="Text Porsenigama"
            width={300}
            height={100}
            className="w-[200px] md:w-[300px]"
          />
        </div>
      </div>

      <div className="mt-20 w-full px-4 md:px-0">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {results.map((result) => (
            <div
              key={`${result.sport}-${result.match}`}
              className="min-w-[250px] rounded-xl bg-white"
            >
              <div className="p-4 text-center">
                <div className="text-xl font-semibold">{result.sport}</div>
                <div className="my-2 text-5xl font-black">{result.score}</div>
              </div>
              <div className="rounded-b-xl bg-gray-900 p-2 text-center text-sm text-white">
                <div className="text-xl font-semibold">{result.match}</div>
                <div>{result.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-40 flex flex-col justify-center px-4 md:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-black">CABANG</h2>
          <p className="text-5xl font-light">PERLOMBAAN</p>
        </div>
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-x-3">
          <div className="flex min-w-full flex-col items-center justify-center rounded-[40px] border-[20px] border-white bg-gray-200 p-10 shadow-lg md:min-w-[500px]">
            <Image
              src="/images/olahraga.svg"
              alt="Olahraga"
              width={100}
              height={100}
              className="mb-5"
            />
            <h3 className="mb-5 text-4xl font-black">OLAHRAGA</h3>
            <button
              type="button"
              className="rounded-3xl bg-yellow-400 px-8 py-3 text-black shadow-lg"
            >
              Lihat Selengkapnya
            </button>
          </div>
          <div className="flex min-w-full flex-col items-center justify-center rounded-[40px] border-[20px] border-white bg-gray-200 p-10 shadow-lg md:min-w-[500px]">
            <Image
              src="/images/kesenian.svg"
              alt="Kesenian"
              width={100}
              height={100}
              className="mb-5"
            />
            <h3 className="mb-5 text-4xl font-black">KESENIAN</h3>
            <button
              type="button"
              className="rounded-3xl bg-yellow-400 px-8 py-3 text-black shadow-lg"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
