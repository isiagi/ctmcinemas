import { MovieDetails } from "@/types/movie";
import MovieShowtimes from "@/components/movie-showtimes";

async function getMovieData(id: string): Promise<MovieDetails | null> {
  // This would typically be an API call. For now, we'll return mock data.
  return {
    id: id,
    title: "Arthur The King",
    duration: "105 min",
    language: "English",
    rating: "PG-13",
    description:
      "Based on a true story, a Swedish adventure racer adopts a stray dog named Arthur who joins him on an epic journey through the Ecuadorian jungle.",
    bannerImage: "/placeholder.svg?height=400&width=1200",
    days: [
      {
        date: "2025-01-02",
        displayDate: "Tomorrow",
        showtimes: [
          { time: "10:30", type: "Standard", price: "$12" },
          { time: "13:45", type: "Standard", price: "$12" },
          { time: "16:15", type: "Standard", price: "$12" },
          { time: "19:00", type: "Standard", price: "$15" },
          { time: "21:30", type: "Standard", price: "$15" },
        ],
      },
      {
        date: "2025-01-03",
        displayDate: "Fri 03 Jan",
        showtimes: [
          { time: "11:00", type: "Standard", price: "$15" },
          { time: "14:15", type: "Standard", price: "$15" },
          { time: "16:45", type: "Standard", price: "$15" },
          { time: "19:30", type: "Standard", price: "$18" },
          { time: "22:00", type: "Standard", price: "$18" },
        ],
      },
    ],
  };
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movieData = await getMovieData(params.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <MovieShowtimes movie={movieData} />
    </div>
  );
}
