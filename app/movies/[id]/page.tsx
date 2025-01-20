import { MovieDetails } from "@/types/movie";
import MovieShowtimes from "@/components/movie-showtimes";
import { movies } from "@/lib/movies";

async function getMovieData(id: string): Promise<MovieDetails | null> {
  // This would typically be an API call. For now, we'll return mock data.
  const showtimes = ["12:00 PM", "2:30 PM", "5:00 PM", "7:30 PM", "10:00 PM"];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const generateShowtimes = (date: Date) => {
    const dayOfWeek = daysOfWeek[date.getDay()];
    let price: number;
    let type: string;

    switch (dayOfWeek) {
      case "Monday":
        price = 8000;
        type = "3D";
        break;
      case "Tuesday":
      case "Wednesday":
        price = 12000;
        type = "3D + Popcorn";
        break;
      case "Thursday":
        price = 10000;
        type = "3D";
        break;
      default:
        price = 13000;
        type = "3D";
    }

    return showtimes.map((time) => ({
      time,
      type,
      price: price.toString(),
      dayOfWeek,
    }));
  };

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      date: date.toISOString().split("T")[0],
      displayDate: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      dayOfWeek: daysOfWeek[date.getDay()],
      showtimes: generateShowtimes(date),
    };
  });

  // find movie by slug and return movie data added days
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) return null;
  console.log(movie);
  return { ...movie, days };
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movieData = await getMovieData(params.id);
  console.log(movieData);

  return (
    <div className="min-h-screen bg-gray-100">
      <MovieShowtimes movie={movieData} />
    </div>
  );
}
