
import Image from 'next/image';
import iPhone12ConceptArt from './img/iPhone-12-ConceptArt.png';

import styles from './Main.module.css';
import Projects from './Projects';

export default function Main() {

  const mainHeadingStyle = 'mb-5 mt-10 sm:text-6xl text-5xl items-center Avenir xl:w-2/2';
  const paraStyle = 'mb-4 xl:w-3/4 text-gray-500 text-lg text-justify';

  return (
    <div className="body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">

          <h1 className={mainHeadingStyle}>
            Digital Tech Solutions
          </h1>

          <p className={paraStyle}>
            We are a UK-based tech company dedicated to challenging the
            mobile gaming experience. Our team of creative innovators is
            committed to designing engaging mobile games that captivate and
            inspire players. We believe in challenging the status quo of the
            mobile app industry by focusing on immersive gameplay,
            cutting-edge technology, and unparalleled user experiences.
          </p>
          <p className={paraStyle}>
            Our games are more than just entertainment; they are a fusion of
            art, technology, and storytelling. Join us on our journey to
            redefine mobile gaming and discover a world where creativity
            knows no bounds.
          </p>

          {/* <div className="flex justify-center">
            <a className="inline-flex items-center px-5 py-3 mt-2 font-medium transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900" href="#AboutMe" >
              <span className="justify-center">Find out more</span>
            </a>
          </div> */}

        </div>
        <div className="flex items-center">
          <Image className={`${styles.iPhone12} w-80`} src={iPhone12ConceptArt} alt="iPhone 12" />
        </div>
      </div>

      <section id="IWriteCode" className="mx-auto">
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            We create engaging gaming content.
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-500 text-center">
            Bringing the fun back into gaming, straight to your mobile device.
          </h1>
        </div>
        <Projects />
      </section>

      <section id="Faq" className="mx-auto">
        <div className="grr max-w-4xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Questions?
          </h1>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q: Are your games free to play?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A: Yes, our games will be free to download and play. However, some
            games may offer in-app purchases for additional content or
            features. These purchases will always be cosmetic-only,
            completely optional and will not give players a strategic advantage.
          </p>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q: What platforms are your games available on?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A: Our games are primarily developed for mobile devices and will be
            available on both iOS and Android platforms. You will find our games
            on the Apple App Store and Google Play Store.
          </p>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q: Do you have a support team for game-related issues?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A: Yes, we have a dedicated support team to assist you with any
            issues you may encounter while playing our games. You can contact
            them through our website's support page or within the game's
            settings menu.
          </p>
        </div>
        <div className="grr max-w-4xl px-10 py-5 mx-auto">
          <h3 className="font-semibold text-2xl text-gray-900">
            Q: Can I give feedback or suggest ideas for future games?
          </h3>
          <p className="py-5 value-text text-md text-gray-500">
            A: Absolutely! We value player feedback and encourage you to share
            your thoughts and ideas with us. You can do this through our social
            media channels or by sending us a message via the contact form on
            our website.
          </p>
        </div>
      </section>

    </div>
  );
}
