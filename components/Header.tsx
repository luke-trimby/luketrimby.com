import React from "react";
import { TwitterLogoSvg } from './svg/twitter-logo';
import { GitHubLogoSvg } from './svg/github-logo';
import { LinkedInLogoSvg } from './svg/linkedin-logo';
import { StackOverflowLogoSvg } from './svg/stackoverflow-logo';

export default function Header() {

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1 ">
          <a href="/" className="flex text-3xl text-white font-medium mb-4 md:mb-0">Luke Trimby</a>
        </div>
        <div className="flex flex-grow items-center">
          <div className="w-full ml-auto mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center text-base text-1xl justify-center justify-items-start">
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="#IWriteCode">
              Projects
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="api/cv" >
              CV
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="#MyContact">
              Contact
            </a>
          </div>
          <a
            href="https://twitter.com/lukas_wins"
            rel="noopener noreferrer"
            target="_blank"
            className=""
          >
            <TwitterLogoSvg />
          </a>
          <a
            href="https://www.linkedin.com/in/luke-trimby"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-5 "
          >
            <LinkedInLogoSvg />
          </a>
          <a
            href="https://github.com/luke-trimby"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-5 "
          >
            <GitHubLogoSvg />
          </a>
          <a
            href="https://stackoverflow.com/users/1313243/luke-trimby"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-5 "
          >
            <StackOverflowLogoSvg />
          </a>
        </div>
      </div>
    </header>
  );
}
