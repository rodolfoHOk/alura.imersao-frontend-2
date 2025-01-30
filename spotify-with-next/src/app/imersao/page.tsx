'use client';
import { ContentHeader } from '@/components/ContentHeader';
import { OfferList } from '@/components/OfferList';
import { ArtistResult } from '@/components/ArtistResult';
import { Artist, ArtistsResponse } from '@/models/artist';
import { useState } from 'react';

export default function Home() {
  const [searchResult, setSearchResult] = useState<Artist[]>([]);

  async function onSearchInputChange(text: string) {
    const apiResponse = await fetch(
      `http://localhost:3000/api/artists?search=${text}`,
      {
        next: {
          revalidate: 60 * 60 * 8,
        },
      }
    );
    const artistsResponse = (await apiResponse.json()) as ArtistsResponse;
    setSearchResult(artistsResponse.artists);
  }

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <ContentHeader onSearchInputChange={onSearchInputChange} />

      {searchResult?.length > 0 ? (
        <div className="w-full h-[calc(100%-72px)] px-6 py-12 flex flex-col bg-secondary_bg rounded-lg overflow-y-scroll">
          <ArtistResult artists={searchResult} />
        </div>
      ) : (
        <div className="w-full h-[calc(100%-72px)] px-6 py-12 flex flex-col bg-secondary_bg rounded-lg overflow-y-scroll">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-4xl">Boa tarde</h1>

            <h2 className="font-bold text-2xl">Navegar por todas as seções</h2>
          </div>

          <OfferList />
        </div>
      )}
    </div>
  );
}
