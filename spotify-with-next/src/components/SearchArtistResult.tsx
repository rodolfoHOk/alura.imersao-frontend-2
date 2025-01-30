import { Artist } from '@/models/artist';
import { ArtistCard } from './ArtistCard';

interface SearchArtistResultProps {
  artists: Artist[];
}

export function SearchArtistResult({ artists }: SearchArtistResultProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}
