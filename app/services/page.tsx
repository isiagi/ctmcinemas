import { Film, Users, UserPlus, Baby, PartyPopper } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Film,
    title: "Movie Screening",
    description:
      "Immerse yourself in the magic of cinema with our state-of-the-art movie screenings. From the latest blockbusters to timeless classics, we offer a diverse range of films to cater to all tastes. Our theatres are equipped with cutting-edge projection and sound systems to ensure an unparalleled viewing experience.",
    image:
      "https://jamonkey.com/wp-content/uploads/2020/12/movie-screenings.jpg",
  },
  {
    icon: Users,
    title: "Theatre Rental",
    description:
      "Transform your corporate events, private gatherings, or special occasions with our theatre rental service. Our versatile spaces can accommodate groups of various sizes, providing a unique and memorable setting for your event. Whether you're hosting a presentation, a private screening, or a team-building activity, our theatres offer the perfect backdrop.",
    image:
      "https://www.princesscinemas.com/files/princesscinemas/client-files/inline-images/thea.png",
  },
  {
    icon: UserPlus,
    title: "Private Screening",
    description:
      "Create unforgettable moments with our private screening service. Whether it's a birthday celebration, an anniversary, or just a special night out with friends, you can enjoy your favorite movies in an exclusive setting. Customize your experience with personalized touches and catering options to make your event truly special.",
    image:
      "https://amc-theatres-res.cloudinary.com/image/upload/c_fill,w_767,h_410,g_auto/f_auto/q_auto/v1604438987/amc-cdn/production/2/movies/65400/65421/HeroMobileDynamic/111960.jpg",
  },
  {
    icon: Baby,
    title: "Kids Entertainment",
    description:
      "We believe in nurturing young imaginations. Our kids entertainment services include specially curated movie screenings, interactive workshops, and fun events designed to engage and inspire children. From animated favorites to educational content, we provide a safe and enjoyable environment for young movie enthusiasts.",
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2023/06/Print-Issue-18-fea_kids-list_MAIN-Getty-H-2023.jpg",
  },
  {
    icon: PartyPopper,
    title: "Special Events",
    description:
      "Elevate your events with our special event services. Whether you're organizing a film festival, a movie premiere, or a themed movie night, we have the expertise and facilities to make it extraordinary. Our team can assist with event planning, technical support, and creating a tailored experience that will leave a lasting impression on your guests.",
    image:
      "https://img.freepik.com/premium-vector/special-show-3d-editable-text-style-effect_57516-1921.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      <div className="relative h-[300px] w-full mb-12">
        <Image
          src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D"
          alt="Coming Soon Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1> */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-3xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
