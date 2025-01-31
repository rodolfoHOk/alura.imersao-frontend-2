import { redirect } from 'next/navigation';
import { ArtistResult } from '@/components/ArtistResult';
import { ArtistsResponse } from '@/models/artist';
import { ContentHeader } from '@/components/ContentHeader';

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
  const { search } = await params;
  if (!search) {
    redirect('/new/search');
  }
  const searchArtistsResponse = await fetchArtists(search);

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <ContentHeader />

      <div className="w-full h-[calc(100%-72px)] px-6 py-12 flex flex-col bg-secondary_bg rounded-lg overflow-y-scroll">
        <ArtistResult artists={searchArtistsResponse.artists} />
      </div>
    </div>
  );
}
