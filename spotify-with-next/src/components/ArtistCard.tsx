import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Artist } from '@/models/artist';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="p-4 w-full relative flex-1 bg-card_bg rounded-lg hover:bg-card_hover_bg transition-colors duration-75 group">
      <div className="w-full relative">
        <Image
          className="rounded-full"
          src={artist.urlImg}
          alt=""
          width={300}
          height={300}
          priority
        />
        <div className="relative">
          <div className="absolute -top-12 right-2 w-12 h-12 flex items-center justify-center bg-play_bg text-sm rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 gr transition-all duration-300">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
      </div>

      <Link href="#">
        <div className="pt-4 flex flex-col gap-1">
          <span className="font-bold text-primary_text">{artist.name}</span>
          <span className="text-secondary_text">{artist.genre}</span>
        </div>
      </Link>
    </div>
  );
}
