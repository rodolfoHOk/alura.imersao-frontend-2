import { Artist } from '@/models/artist';
import { ArtistCard } from './ArtistCard';

interface ArtistResultProps {
  artists: Artist[];
}

export function ArtistResult({ artists }: ArtistResultProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-center">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}
