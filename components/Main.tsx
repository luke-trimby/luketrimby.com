import React from 'react'
import { SuitedManSvg } from './svg/suited-man';
import { CasualManSvg } from './svg/casual-man';

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">

        <div className="flex justify-center">
          <img className="w-36 h-36 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/images/avatar.jpg" alt="Bordered avatar" />
        </div>

        <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Hi, I'm Luke
        </h1>

        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 rounded-md text-gray-700 text-center">
          I am a Software Developer based in the UK.
        </h2>

      </div>

      {/* <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt="Placeholder Image"
          src="./images/placeholder.png"
        />
      </div> */}

      <h2 id="IWriteCode" className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        I write code.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Here are a few of my favourite projects I've worked on.
      </p>

      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">

        <div className="bg-gray-800 rounded-lg px-5 py-5">
          <div className="relative">
            <img className="w-50" src="images/free4all.jpg" />
            <a href="https://extra.bet365.com/promotions/en/free-4-all" target="_blank">
              <img className="h-20 scale-125 hover:scale-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="images/play-button-overlay-png-1.png" />
            </a>
          </div>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Free4All (Bet365)
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Correctly answer two pre-match questions about the first-half
            of the selected game and, if you get these right, you can then
            answer two more on the second-half. Correctly answer all 4
            questions to win £10 in Free Bets.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg px-5 py-5">
          <div className="relative">
            <img className="w-50" src="images/WEB_Retropia.jpg" />
            <a href="https://games.gamevy.com/d/e935cafe18101e120c0e2af5b167fdfd8f990d70/index.html?env=staging&region=euwest2&platform=gamevy&operator=gamevy&mode=fun&currency=GBP&lang=en-GB&lobbyUrl=&historyUrl=&realityCheckInterval=&jurisdiction=" target="_blank">
              <img className="h-20 scale-125 hover:scale-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="images/play-button-overlay-png-1.png" />
            </a>
          </div>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Retropia
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Retropia - a retro sci-fi slot with a well-executed design and
            unique features. 'The slot of the future, today!' is the game's
            slogan, and players are to try the latest scientific invention
            that turns symbols into Wilds and brings wins of up to £100,000.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg px-5 py-5">
          <div className="relative">
            <img className="w-50" src="images/WEB_Million_Book.jpg" />
            <a href="https://games.gamevy.com/d/8a17bfaad140915cb356930264b53a5278835869/index.html?env=staging&region=euwest2&platform=gamevy&operator=gamevy&mode=fun&currency=GBP&lang=en-GB&lobbyUrl=&historyUrl=&realityCheckInterval=&jurisdiction=" target="_blank"> {/*  */}
              <img className="h-20 scale-125 hover:scale-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="images/play-button-overlay-png-1.png" />
            </a>
          </div>
          <h3 className="pt-3 font-semibold text-lg text-white">
            €1m Book (Epic Industries / G Games)
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            This slot is so named because you can win $ 1,000,000 in one spin!
            This can be done on 5 reels with 10 pay lines.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg px-5 py-5">
          <div className="relative">
            <img className="w-50" src="images/WEB_EOE_Gold.jpg" />
            <a href="https://games.gamevy.com/d/efa57a78ac211c0160438e08ee80bbf886aee442/index.html?env=staging&region=euwest2&platform=gamevy&operator=gamevy&mode=fun&currency=GBP&lang=en-GB&lobbyUrl=&historyUrl=&realityCheckInterval=&jurisdiction=" target="_blank"> {/*  */}
              <img className="h-20 scale-125 hover:scale-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="images/play-button-overlay-png-1.png" />
            </a>
          </div>
          <h3 className="pt-3 font-semibold text-lg text-white">
            Elite of Evil (Epic Industries / G Games)
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>

      <div className="w-8/12 pt-32 pb-16 max-w-6xl mx-auto md:px-1 px-3">
        <div className="bg-gray-800 rounded-lg flex flex-grow items-center">
          <div className='w-1/12'>
            <SuitedManSvg />
          </div>
          <div className='w-11/12 pl-10 pr-10'>
            <h3 className="pt-5 pb-3 font-semibold text-2xl text-white">
              Professional Life
            </h3>
            <p className="pt-5 pb-3 value-text text-md text-gray-200 fkrr1">
              Since graduating, I have gaind over ten years of commercial
              experience in all sorts of different roles utilising varying
              technologies and software stacks. 8 years and 3 roles creating
              and mastering proprietary front-end frameworks built around 2d
              rendering libraries, native mobile apps, front-end web projects
              and back-end systems and frameworks.
            </p>
            <p className="pt-5 pb-3 value-text text-md text-gray-200 fkrr1">
              Over the years I have worked with many third-party technologies
              to integrate many different systems including: -
            </p>
            <ul className="pt-3 pb-5 value-text text-md text-gray-200 list-disc list-inside">
              <li>WebGL/Canvas2D rendering libraries (PixiJS, Phaser) - Typescript</li>
              <li>Partner integrations (Yggdrasil Masters, Openbet) - Typescript</li>
              <li>Apple Game Centre - Objective-C</li>
              <li>Payment gateways (Paypal) - PHP</li>
              <li>Facebook API - PHP</li>
              <li>Google Maps - Javascript/JQuery, Java (Android SDK)</li>
              <li>Face detection - Objective-C, Java (Android SDK)</li>
              <li>Push notifications (Urban Airship) - Objective-C, Java (Android SDK)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-8/12 pt-16 pb-32 max-w-6xl mx-auto md:px-1 px-3">
        <div className="bg-gray-800 rounded-lg flex flex-grow items-center">
          <div className='w-11/12 pl-10 pr-10'>
            <h3 className="pt-5 pb-3 font-semibold text-2xl text-white">
              Personal Life
            </h3>
            <p className="pt-3 pb-5 value-text text-md text-gray-200 fkrr1">
              I keep myself fit and healthy by regularly attending the gym and can be
              found doing other sports such as motocross and rollerskating. I have
              interests in AI, machine learning, finance, travel, business, politics,
              psychology, music and anything else nerdy I can get my teeth into.
            </p>
          </div>
          <div className='w-1/12'>
            <CasualManSvg />
          </div>
        </div>
      </div>
    </section>
  );
}
