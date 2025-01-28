import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faShip,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <div className="flex flex-row items-center pt-2 px-2">
      <div className="min-w-32 pl-5">
        <Image
          src="/assets/icons/logo-spotify.png"
          alt="logo do Spotify"
          width={110}
          height={40}
          priority
        />
      </div>

      <div className="mx-2 w-full flex flex-row gap-2 justify-start xl:justify-center">
        <button className="min-w-12 w-12 h-12 bg-tertiary_bg rounded-full text-secondary_text hover:scale-105 transition-transform">
          <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
        </button>

        <label className="w-full min-w-[270px] max-w-[490px] h-12 px-4 flex flex-row items-center gap-3 bg-tertiary_bg rounded-full text-secondary_text border border-transparent hover:bg-secondary_text/25 hover:border-secondary_text/30 transition-colors">
          <button className="hover:text-primary_text transition-colors">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          </button>
          <input
            className="w-full bg-transparent outline-none placeholder:font-medium"
            type="search"
            placeholder="O que você quer ouvir?"
          />
          <div className="w-[1px] h-6 bg-secondary_text/50" />
          <button className="hover:text-primary_text hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faShip} className="w-5 h-5" />
          </button>
        </label>
      </div>

      <div className="min-w-96 flex flex-row items-center gap-4 ml-auto">
        <button className="mr-4 flex flex-row items-center text-secondary_text text-sm font-bold hover:text-primary_text hover:scale-105 transition-all">
          <FontAwesomeIcon icon={faDownload} />
          <span className="ml-1">Instalar aplicativo</span>
        </button>

        <button className="flex flex-row items-center text-secondary_text text-sm font-bold hover:text-primary_text hover:scale-105 transition-all">
          Inscrever-se
        </button>

        <button className="h-12 bg-white text-inverse_text font-bold px-8 rounded-full hover:bg-inverse_bg hover:scale-105 transition-all">
          Entrar
        </button>
      </div>
    </div>
  );
}
