/*
  Ini punya Nasta
  Semangat Nas!
*/
"use client";

import React, { useState } from "react";
import rankings from "./data/rankings.json";
import results from "./data/results.json";
import schedule from "./data/schedule.json";

export default function Nasta() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#006582] via-[#00B5E8] via-55% to-[#EDEACB]">
      <nav className="fixed top-4 my-4 flex h-16 w-3/4 items-center justify-between rounded-full bg-white px-6 shadow-xl">
        <div>
          <img src="././images/logo-porsenigama.webp" alt="Logo Porsenigama" className="h-[40px]" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden gap-7 lg:flex">
          <a href="#jadwal" className=" text-xl font-light text-black hover:text-slate-500">
            Jadwal
          </a>
          <a href="#cabang" className=" text-xl font-light text-black hover:text-slate-500">
            Cabang
          </a>
          <a href="#klasemen" className=" text-xl font-light text-black hover:text-slate-500">
            Klasemen
          </a>
          <a href="#kontingen" className=" text-xl font-light text-black hover:text-slate-500">
            Kontingen
          </a>
          <a href="#jadwal" className=" text-xl font-light text-black hover:text-slate-500">
            Galeri
          </a>
          <a href="#jadwal" className=" text-xl font-light text-black hover:text-slate-500">
            Suporter
          </a>
          <a href="#jadwal" className=" text-xl font-light text-black hover:text-slate-500">
            FAQ
          </a>
        </div>
        <div className="hidden lg:flex">
          <button>
            <img src="././images/log.svg" alt="Log Icon" />
          </button>
        </div>

        {/* Mobile Menu */}
        <button type="button" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 w-3/4 rounded-xl bg-white p-4 shadow-xl lg:hidden">
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
      <div className="mt-[150px] flex flex-col-reverse gap-[100px] lg:mt-[120px] lg:flex-row">
        <div className="flex w-[500px] flex-col gap-3">
          <div className="rounded-2xl bg-white px-[5%] py-[3%]">
            <h2 className="pb-4 text-xl font-bold">Klasemen Teratas</h2>
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
                  <tr key={ranking.rank} className="border-b">
                    <td className="py-2">{ranking.rank}</td>
                    <td>{ranking.fakultas}</td>
                    <td>{ranking.gold}</td>
                    <td>{ranking.silver}</td>
                    <td>{ranking.bronze}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 rounded-full bg-yellow-400 px-6 py-2 text-black">
              Lihat Selengkapnya
            </button>
          </div>
          <div className="rounded-2xl bg-white px-[5%] py-[3%]">
            <h2 className="pb-4 text-xl font-bold">Jadwal Selanjutnya</h2>
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
            <button className="mt-4 rounded-full bg-yellow-400 px-6 py-2 text-black">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="././images/logo-porsenigama.png" alt="Logo Porsenigama" className="w-[300px]" />
          <img src="././images/text-porsenigama.svg" alt="Text Porsenigama" className="w-[300px]" />
        </div>
      </div>

      <div className="mt-20 px-4 md:px-0">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {results.map((result) => (
            <div
              key={`${result.sport}-${result.match}`}
              className="min-w-[250px] flex-shrink-0 rounded-xl bg-white"
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
      <div className="my-40 flex flex-col justify-center md:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-black">CABANG</h2>
          <p className="text-5xl font-light">PERLOMBAAN</p>
        </div>
        <div className="mt-10 flex flex-col gap-y-5 md:gap-x-3 lg:flex-row">
          <div className="flex min-w-full flex-col items-center justify-center rounded-[40px] border-[20px] border-white bg-gray-200 p-10 shadow-lg md:min-w-[500px]">
            <img src="././images/olahraga.svg" alt="Olahraga" className="mb-5" />
            <h3 className="mb-5 text-4xl font-black">OLAHRAGA</h3>
            <button className="rounded-3xl bg-yellow-400 px-8 py-3 text-black shadow-lg">
              Lihat Selengkapnya
            </button>
          </div>
          <div className="flex min-w-[500px] flex-col items-center justify-center rounded-[40px] border-[20px] border-white bg-gray-200 p-10 shadow-lg">
            <img src="././images/kesenian.svg" alt="Kesenian" className="mb-5" />
            <h3 className="mb-5 text-4xl font-black">KESENIAN</h3>
            <button className="rounded-3xl bg-yellow-400 px-8 py-3 text-black shadow-lg">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
