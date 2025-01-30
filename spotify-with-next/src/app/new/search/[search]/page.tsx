import { redirect } from 'next/navigation';
import { ArtistResult } from '@/components/ArtistResult';
import { ArtistsResponse } from '@/models/artist';

async function fetchArtists(searchTerm: string): Promise<ArtistsResponse> {
  const apiResponse = await fetch(
    `http://localhost:3000/api/artists?search=${searchTerm}`,
    {
      next: {
        revalidate: 60 * 60 * 8,
      },
    }
  );
  return await apiResponse.json();
}

export default async function SearchPage({
  params,
}: {
  params: { search: string };
}) {
  const { search } = params;
  if (!search) {
    redirect('/new/search');
  }
  const popularArtistsResponse = await fetchArtists(search);

  return (
    <div className="w-full h-full px-6 py-4 flex flex-col gap-4 bg-secondary_bg rounded-lg overflow-y-scroll">
      <h2 className="font-bold text-2xl hover:underline">Artistas Populares</h2>

      <ArtistResult artists={popularArtistsResponse.artists} />
    </div>
  );
}
