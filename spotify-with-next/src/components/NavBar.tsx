import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="h-fit bg-secondary_bg rounded-lg">
      <div className="flex rounded-lg pt-4 px-4">
        <Link href="/">
          <Image
            src="/assets/icons/logo-spotify.png"
            alt="logo do Spotify"
            width={80}
            height={40}
            priority
          />
        </Link>
      </div>

      <ul className="mt-5 px-5 pb-2.5">
        <li className="py-2.5">
          <Link
            href="/"
            className="text-secondary_text font-semibold text-sm hover:text-primary_text transition-colors"
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="ml-2">Início</span>
          </Link>
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
    </nav>
  );
}
