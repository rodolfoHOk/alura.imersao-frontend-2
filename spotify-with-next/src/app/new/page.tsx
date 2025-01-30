import { ArtistResult } from '@/components/ArtistResult';
import { ArtistsResponse } from '@/models/artist';

async function fetchPopularArtists(): Promise<ArtistsResponse> {
  const apiResponse = await fetch(`http://localhost:3000/api/artists/popular`, {
    next: {
      revalidate: 60 * 60 * 8,
    },
  });
  return await apiResponse.json();
}

export default async function NewHomePage() {
  const popularArtistsResponse = await fetchPopularArtists();

  return (
    <div className="w-full h-full px-6 py-4 flex flex-col gap-4 bg-secondary_bg rounded-lg overflow-y-scroll">
      <h2 className="font-bold text-2xl hover:underline">Artistas Populares</h2>

      <ArtistResult artists={popularArtistsResponse.artists} />
    </div>
  );
}
