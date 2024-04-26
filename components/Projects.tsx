import Image from 'next/image';

import playBtnOverlay from './img/play-button-overlay-png-1.png';
import projectOne1x1 from './img/project-one-1x1.png';

export default function Projects() {

  const projContainerStyle = 'bg-gray-800 rounded-lg px-5 py-5';
  const imgOverlayStyle = 'scale-50 hover:scale-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';

  return (
    <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3">

      <div className={projContainerStyle}>
        <div className="relative">
          <Image className="w-50" src={projectOne1x1} alt="Project One Image" />
          <a href="http://lukas-tech.com" target="_blank">
            <Image className={imgOverlayStyle} src={playBtnOverlay} alt="Play Button Overlay" />
          </a>
        </div>
        <h3 className="pt-3 font-semibold text-lg text-white">
          Capitalist Tycoon Game
        </h3>
        <p className="pt-2 value-text text-md text-gray-200 text-justify">
          Introducing our latest project: a groundbreaking capitalist
          tycoon game that pushes the boundaries of strategy and business
          simulation. Set in a bustling virtual world, players take on the role
          of ambitious entrepreneurs aiming to build their business empires
          from scratch. This game offers a complex yet intuitive environment
          where you can design and manage your business operations, from
          manufacturing and logistics to marketing and customer relations. With
          an innovative perspective, detailed graphics, and a dynamic
          economy, each decision you make shapes the landscape and influences
          your success. Expect deep strategic gameplay, engaging challenges,
          and endless opportunities to expand your business footprint in this
          upcoming game that redefines the capitalist tycoon genre.
        </p>
      </div>

    </div>
  )
}