// components/ContactSection.jsx
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Youtube,
  MessageSquareMore,
} from "lucide-react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contactus" className="bg-white py-16 px-6 md:px-20 text-[#14452f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          We'd love to hear from you. Whether it's a bulk order, a special
          request, or a simple inquiry — we’re just a message away.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Reach Out</h3>
            <p className="text-gray-700">📍 Punnakkal Road, Tharimattam, Thiruvambady, Calicut Pin -673603</p>
            <p className="text-gray-700">📞 +91 99462 60777</p>
            <p className="text-gray-700">✉️ gdotinternational@gmail.com</p>

            {/* Social Icons */}
           <div className="flex gap-5 mt-6 text-[#14452f]">
  <a
    href="https://facebook.com"
    target="_blank"
    aria-label="Facebook"
    className="hover:text-blue-600 transition"
  >
    <FaFacebookSquare className="w-6 h-6" />
  </a>
  <a
    href="https://www.instagram.com/gdot_international/"
    target="_blank"
    aria-label="Instagram"
    className="hover:text-pink-500 transition"
  >
    <FaInstagram className="w-6 h-6" />
  </a>
  <a
    href="https://youtube.com"
    target="_blank"
    aria-label="YouTube"
    className="hover:text-red-600 transition"
  >
    <FaYoutube className="w-6 h-6" />
  </a>
  <a
    href="mailto:gdotinternational@gmail.com"
    aria-label="Email"
    className="hover:text-[#14452f] transition"
  >
    <FaEnvelope className="w-6 h-6" />
  </a>
</div>

          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-[#f7f7f7] p-6 rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#14452f]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#14452f]"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#14452f]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#14452f] text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
