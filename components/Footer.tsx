import React from "react";

export default function Footer() {
  return (
    <footer id="MyContact" className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">

        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">

          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Downloads</h2>
            <ul className="space-y-4">
              <li> <a className="hover:text-white transition-colors duration-200 text-xl" href="/api/cv" > CV </a> </li>
            </ul>
          </li>

          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Contact</h2>
            <ul className="space-y-4">
              <li> <a className="hover:text-white transition-colors duration-200 font-semibold text-xl" href="mailto:luketrimby@outlook.com" target="_blank" > Email </a> </li>
              <li> <a className="hover:text-white transition-colors duration-200 text-xl" href="https://www.linkedin.com/in/luke-trimby" target="_blank" > LinkedIn </a> </li>
              <li> <a className="hover:text-white transition-colors duration-200 text-xl" href="https://twitter.com/lukas_wins" target="_blank" > Twitter </a> </li>
            </ul>
          </li>

        </ul>

        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">

          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a href="/" className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight" > © Luke Trimby 2023. All rights reserved. </a>
          </ul>

        </div>
      </div>
    </footer>
  );
}
