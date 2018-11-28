export class Show {
  id: number;
  title: string;
  description: string;
  genres: string[];
  length;
  images: {
    poster: string;
  };
  status: string;
  network: string;
  seasons: number;
  episodes: number;
  resource_url: string;
}
