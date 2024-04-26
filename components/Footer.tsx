export default function Footer() {

  const listClassName = 'space-y-5 row-span-2 pb-5';
  const listItemClassName = 'text-gray-500 hover:text-white transition-colors duration-200 text-2xl';

  return (
    <footer id="ContactMe" className="py-20">
      <div className="max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">

          <li className={listClassName}>
            <h2 className="text-sm tracking-wide text-gray-200 uppercase font-bold">
              Contact
            </h2>
            <ul className="space-y-4">
              <li>
                <a className={listItemClassName} href="mailto:luketrimby@outlook.com" target="_blank" >
                  Email
                </a>
              </li>
              <li>
                <a className={listItemClassName} href="https://www.linkedin.com/in/lukas-tech" target="_blank" >
                  LinkedIn
                </a>
              </li>
              <li>
                <a className={listItemClassName} href="https://twitter.com/lukas-tech" target="_blank" >
                  Twitter
                </a>
              </li>
            </ul>
          </li>

          <li className={listClassName}>
            <h2 className="text-sm tracking-wide text-gray-200 uppercase font-bold">
              Site Map
            </h2>
            <ul className="space-y-4 text-md">
              <li> <a className={listItemClassName} href="/" > Home </a> </li>
            </ul>
          </li>

        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a href="#" className="text-md text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight" >
              &copy; Lukas Tech 2024. All rights reserved.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
