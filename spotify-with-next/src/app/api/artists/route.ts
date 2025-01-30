import { NextRequest, NextResponse } from 'next/server';
import artistList from './artists.json';
import { ArtistsResponse } from '@/models/artist';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get('search');
  if (!search) {
    return NextResponse.json<ArtistsResponse>({
      artists: [],
    });
  }

  const filteredArtists = artistList.artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return NextResponse.json<ArtistsResponse>({
    artists: filteredArtists,
  });
}
