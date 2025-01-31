export type Artist = {
  id: number;
  name: string;
  genre: string;
  urlImg: string;
};

export type ArtistsResponse = {
  artists: Artist[];
};
