import { CasualManSvg } from './svg/casual-man';
import { SuitedManSvg } from './svg/suited-man';

import styles from './Main.module.css';

export default function Main() {
  return (
    <div className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">

          <h1 className="mb-5 mt-10 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-white">
            Hi, I'm Luke
          </h1>

          <p className="mb-4 xl:w-3/4 text-gray-500 text-lg">
            I am a Software Developer based in the UK
          </p>

          <div className="flex justify-center">
            <a className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900" href="#AboutMe" >
              <span className="justify-center">Find out more</span>
            </a>
          </div>

        </div>
        <div className="flex items-center">
          <img className="w-80 rounded-full" src="/images/avatar.jpg" alt="Bordered avatar" />
        </div>
      </div>

      <section id="IWriteCode" className="mx-auto">
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            I write code.
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-500 text-center">
            Here are a few of my favourite projects I've worked on
          </h1>
        </div>

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
              All the action takes place in a rich-looking mansion in one of
              the halls of which there is a playing field with 5 reels and 3
              rows. You can place bets from €0.10 to €20 per spin. Bonus
              features include Scatter which triggers 10 free spins, Wild
              which replaces regular symbols, Expanding symbol which gives
              more wins during free spins, and Jackpot!
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
              Taking place in a fantasy world with video-game inspired gameplay,
              this G Gaming cascading slot is packed with exciting bonus features
              including treasure chests that you can collect for extra prizes,
              exploding symbols, free spins, and boss fights that transport you
              to new realms to battle a variety of villains!
            </p>
          </div>

        </div>
      </section>

      <section id="AboutMe" className="mx-auto">
        <div className="grr max-w-4xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            About Me
          </h1>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <div className={styles.suitedMan}>
            <SuitedManSvg />
          </div>
          <h3 className="font-semibold text-2xl text-gray-200">
            Professional Life
          </h3>
          <p className="py-5 value-text text-md text-gray-500 fkrr1">
            Since graduating, I have gained over ten years of commercial
            experience in all sorts of different roles utilising varying
            technologies and software stacks. 8 years and 3 roles creating
            and mastering proprietary front-end frameworks built around 2d
            rendering libraries, native mobile apps, front-end web projects
            and back-end systems and frameworks.
          </p>
          <p className="py-5 value-text text-md text-gray-500 fkrr1">
            Over the years I have worked with many third-party technologies
            to integrate many different systems including: -
          </p>
          <ul className="py-5 value-text text-md text-gray-500 list-disc list-inside">
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
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <div className={styles.casualMan}>
            <CasualManSvg />
          </div>
          <h3 className="font-semibold text-2xl text-gray-200">
            Personal Life
          </h3>
          <p className="py-5 value-text text-md text-gray-500 fkrr1">
            I keep myself fit and healthy by regularly attending the gym and can be
            found doing other sports such as motocross and rollerskating. I have
            interests in AI, machine learning, finance, travel, business, politics,
            psychology, music and anything else nerdy I can get my teeth into.
          </p>
        </div>
      </section>

    </div>
  );
}
