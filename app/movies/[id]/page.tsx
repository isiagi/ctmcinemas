/* eslint-disable @typescript-eslint/no-explicit-any */
import { MovieDetails } from "@/types/movie";
import MovieShowtimes from "@/components/movie-showtimes";

async function getMovieData(id: string): Promise<MovieDetails | null> {
  // This would typically be an API call. For now, we'll return mock data.
  return {
    id: id,
    title: "Nosferatu",
    duration: "105 min",
    language: "English",
    rating: "PG-13",
    description:
      "In this haunting reimagining of F.W. Murnau's classic 1922 silent film.",
    longDescription: "A chilling tale of horror and suspense.",
    bannerImage: "https://assets.voxcinemas.com/content/Marco_1735722489.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=o17MF9vnabg",
    director: "Robert Eggers",
    cast: [
      "Lily-Rose Depp",
      "Bill Skarsgård",
      "Nicholas Hoult",
      "Willem Dafoe",
    ],
    genre: ["Horror", "Drama", "Fantasy"],
    days: [
      {
        date: "2025-01-02",
        displayDate: "Tomorrow",
        showtimes: [
          { time: "10:30", type: "Standard", price: "$12" },
          { time: "13:45", type: "Standard", price: "$12" },
          { time: "16:15", type: "Standard", price: "$12" },
        ],
      },
      {
        date: "2025-01-03",
        displayDate: "Fri 03 Jan",
        showtimes: [
          { time: "11:00", type: "Standard", price: "$15" },
          { time: "14:15", type: "Standard", price: "$15" },
          { time: "16:45", type: "Standard", price: "$15" },
        ],
      },
    ],
  };
}

export default async function MoviePage({ params }: any) {
  const movieData = await getMovieData(params.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <MovieShowtimes movie={movieData} />
    </div>
  );
}
