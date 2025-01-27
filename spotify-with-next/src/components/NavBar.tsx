import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

export function NavBar() {
  return (
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
  );
}
