import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// This would typically come from an API
const allMovies = [
  {
    title: "Nosferatu",
    image: "/placeholder.svg?height=600&width=400&text=Nosferatu",
    description: "Succumb to the Darkness",
  },
  {
    title: "Mufasa: The Lion King",
    image: "/placeholder.svg?height=600&width=400&text=Mufasa",
    description: "The story of an orphan who would be king",
  },
  {
    title: "Sonic 3",
    image: "/placeholder.svg?height=600&width=400&text=Sonic+3",
    description: "Speed has no limits",
  },
  {
    title: "Marco",
    image: "/placeholder.svg?height=600&width=400&text=Marco",
    description: "Every hero has a dark side",
  },
  {
    title: "Identity",
    image: "/placeholder.svg?height=600&width=400&text=Identity",
    description: "Who can you trust?",
  },
  {
    title: "The Last Stand",
    image: "/placeholder.svg?height=600&width=400&text=Last+Stand",
    description: "One final battle",
  },
  {
    title: "Beyond",
    image: "/placeholder.svg?height=600&width=400&text=Beyond",
    description: "Adventure awaits",
  },
  {
    title: "Echoes",
    image: "/placeholder.svg?height=600&width=400&text=Echoes",
    description: "The past never dies",
  },
  {
    title: "Starfall",
    image: "/placeholder.svg?height=600&width=400&text=Starfall",
    description: "Look to the stars",
  }
]

export default function MoviesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto py-16 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">All Movies</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allMovies.map((movie, index) => (
            <div key={index} className="relative aspect-[2/3] group">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                  <p className="mb-6 text-lg">{movie.description}</p>
                  <Link href={`/movies/${movie.title.toLowerCase().replace(/ /g, '-')}/showtimes`}>
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="text-white border-white hover:bg-white hover:text-black"
                    >
                      View Showtimes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

