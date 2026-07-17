import Link from "next/link";

import {
  FaPlane,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">


          {/* Brand */}
          <div>

            <div className="flex items-center gap-2.5">

              <span
                className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-sky-500
                via-cyan-500
                to-blue-600
                text-white
                shadow-md
                "
              >
                <FaPlane className="h-5 w-5" />
              </span>


              <span className="text-lg font-black text-slate-900">
                TripPlanner{" "}
                <span className="text-sky-600">
                  AI
                </span>
              </span>

            </div>


            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              AI-powered trip planning platform that creates personalized
              itineraries, recommendations, and smarter travel experiences.
            </p>

          </div>



          {/* Explore */}
          <div>

            <h3 className="text-sm font-bold text-slate-900">
              Explore
            </h3>


            <ul className="mt-4 space-y-3 text-sm text-slate-500">

              <li>
                <Link
                  href="/trips"
                  className="transition hover:text-sky-600"
                >
                  Browse Trips
                </Link>
              </li>


              <li>
                <Link
                  href="/dashboard/traveler/itinerary-planner"
                  className="transition hover:text-sky-600"
                >
                  AI Itinerary Planner
                </Link>
              </li>


              <li>
                <Link
                  href="/about"
                  className="transition hover:text-sky-600"
                >
                  About Us
                </Link>
              </li>


              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-sky-600"
                >
                  Travel Blog
                </Link>
              </li>


            </ul>

          </div>




          {/* Support */}
          <div>

            <h3 className="text-sm font-bold text-slate-900">
              Support
            </h3>


            <ul className="mt-4 space-y-3 text-sm text-slate-500">


              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-sky-600"
                >
                  Contact
                </Link>
              </li>


              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-sky-600"
                >
                  FAQ
                </Link>
              </li>


              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-sky-600"
                >
                  Privacy Policy
                </Link>
              </li>


              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-sky-600"
                >
                  Terms of Service
                </Link>
              </li>


            </ul>

          </div>





          {/* Contact */}
          <div>


            <h3 className="text-sm font-bold text-slate-900">
              Contact
            </h3>



            <ul className="mt-4 space-y-3 text-sm text-slate-500">


              <li className="flex items-center gap-3">

                <FaEnvelope className="text-sky-500" />

                hello@tripplanner.ai

              </li>



              <li className="flex items-center gap-3">

                <FaPhone className="text-sky-500" />

                +880 1700-000000

              </li>




              <li className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-sky-500" />

                Dhaka, Bangladesh

              </li>


            </ul>





            {/* Social */}
            <div className="mt-5 flex gap-3">


              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-white
                text-slate-500
                shadow-sm
                transition
                hover:text-sky-600
                "
              >
                <FaFacebook />
              </a>



              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-white
                text-slate-500
                shadow-sm
                transition
                hover:text-sky-600
                "
              >
                <FaInstagram />
              </a>




              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-white
                text-slate-500
                shadow-sm
                transition
                hover:text-sky-600
                "
              >
                <FaTwitter />
              </a>



            </div>


          </div>


        </div>





        {/* Bottom */}
        <div
          className="
          mt-12
          border-t border-slate-200
          pt-6
          text-center
          text-xs
          text-slate-400
          "
        >
          © {new Date().getFullYear()} TripPlanner AI.
          All rights reserved.
        </div>



      </div>
    </footer>
  );
}