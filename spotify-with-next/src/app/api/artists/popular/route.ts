import { NextResponse } from 'next/server';
import artistList from '../artists.json';
import { ArtistsResponse } from '@/models/artist';

export async function GET() {
  return NextResponse.json<ArtistsResponse>(artistList);
}
