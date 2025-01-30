import { NextResponse } from 'next/server';
import artistList from './artists.json';

type ArtistResponse = {
  id: number;
  name: string;
  genre: string;
  urlImg: string;
};

type ArtistsResponse = {
  artists: ArtistResponse[];
};

export async function GET() {
  return NextResponse.json<ArtistsResponse>(artistList);
}
