import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              About EMT CINEMAS
            </h3>
            <p className="text-sm">
              Experience the magic of movies in state-of-the-art theaters. Your
              premier destination for entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li> */}
              <li>
                <Link
                  href="/movies"
                  className="text-sm hover:text-white transition-colors"
                >
                  All Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/whatson"
                  className="text-sm hover:text-white transition-colors"
                >
                  What&apos;s On
                </Link>
              </li>
              <li>
                <Link
                  href="/comingsoon"
                  className="text-sm hover:text-white transition-colors"
                >
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/membership"
                  className="text-sm hover:text-white transition-colors"
                >
                  Membership
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                0200916821 /
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                info@emtcinemas.com
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                123 Makerere Hill, Ham Towers
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61568398119994&mibextid=ZbWKwL"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/emtcinemas?igsh=MWdnaDd0MXF5bGcwZQ=="
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Instagram />
              </Link>
              <Link
                href="https://x.com/emtcinemas?t=lAI3J827gaZbDJt_am74vA&s=09"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Twitter />
              </Link>
              {/* whatsapp */}
              <Link
                href="https://whatsapp.com/channel/0029VazXqDMFXUuYpvHJBw3U"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <MessageCircle />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} EMT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
