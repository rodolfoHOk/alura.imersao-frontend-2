import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faBook,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <aside className="fixed top-0 bottom-0 left-0 p-3 w-[300px]">
        <nav className="bg-secondary_bg rounded-lg">
          <div className="flex rounded-lg pt-4 px-4">
            <a href="#">
              <Image
                src="/assets/icons/logo-spotify.png"
                alt="logo do Spotify"
                width={80}
                height={40}
                priority
              />
            </a>
          </div>

          <div>
            <ul className="mt-5 px-5 pb-2.5">
              <li className="py-2.5">
                <a
                  href="#"
                  className="text-secondary_text font-semibold text-sm hover:text-primary_text transition-colors"
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span className="ml-2">Início</span>
                </a>
              </li>

              <li className="py-2.5">
                <a
                  href="#"
                  className="text-secondary_text font-semibold text-sm hover:text-primary_text transition-colors"
                >
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="ml-2">Buscar</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-3 bg-secondary_bg rounded-lg">
          <div className="p-5 flex flex-row justify-between">
            <a
              href="#"
              className="text-secondary_text font-semibold hover:text-primary_text transition-colors"
            >
              <FontAwesomeIcon icon={faBook} />
              <span className="ml-2">Sua biblioteca</span>
            </a>

            <a
              href="#"
              className="text-secondary_text font-semibold text-sm hover:text-primary_text transition-colors"
            >
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
