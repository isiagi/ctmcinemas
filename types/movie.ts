export interface MovieShowtime {
  time: string
  type: string
  price: string
}

export interface MovieDay {
  date: string
  displayDate: string
  showtimes: MovieShowtime[]
}

export interface MovieDetails {
  id: string
  title: string
  duration: string
  language: string
  rating: string
  description: string
  bannerImage: string
  days: MovieDay[]
}

