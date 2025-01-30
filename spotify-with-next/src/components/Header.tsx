import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { SearchInput } from './SearchInput';

export function Header() {
  return (
    <div className="flex flex-row items-center pt-2 px-2">
      <div className="min-w-32 pl-5">
        <Link href="/">
          <Image
            src="/assets/icons/logo-spotify.png"
            alt="logo do Spotify"
            width={110}
            height={40}
            priority
          />
        </Link>
      </div>

      <div className="mx-2 w-full flex flex-row gap-2 justify-start xl:justify-center">
        <Link
          href="/new"
          className="min-w-12 w-12 h-12 flex justify-center items-center bg-tertiary_bg rounded-full text-secondary_text hover:scale-105 transition-transform"
        >
          <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
        </Link>

        <SearchInput />
      </div>

      <div className="min-w-[390px] flex flex-row items-center gap-4 ml-auto">
        <button className="mr-4 flex flex-row items-center text-secondary_text text-sm font-bold text-nowrap hover:text-primary_text hover:scale-105 transition-all">
          <FontAwesomeIcon icon={faDownload} />
          <span className="ml-1">Instalar aplicativo</span>
        </button>

        <button className="flex flex-row items-center text-secondary_text text-sm font-bold text-nowrap hover:text-primary_text hover:scale-105 transition-all">
          Inscrever-se
        </button>

        <button className="h-12 bg-white text-inverse_text font-bold px-8 rounded-full hover:bg-inverse_bg hover:scale-105 transition-all">
          Entrar
        </button>
      </div>
    </div>
  );
}
