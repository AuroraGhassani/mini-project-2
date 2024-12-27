import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";  // Social media icons

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-6 mx-auto md:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Company Info / Logo */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h1 className="text-3xl font-bold tracking-wide text-white">Mind</h1>
            <p className="mt-4 text-sm text-gray-400">
              Your well-being matters to us. Helping you take control of your mental health and live life to the fullest.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 transition duration-300 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 transition duration-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 transition duration-300 hover:text-white">Contact</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 transition duration-300 hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-6 md:space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:info@mindcare.com" className="text-gray-300 transition duration-300 hover:text-white">info@mindcare.com</a>
            </p>
            <p className="text-sm text-gray-400">
              Phone: <a href="tel:+1234567890" className="text-gray-300 transition duration-300 hover:text-white">+123 456 7890</a>
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Address: 123 Wellness St, City, Country
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Mind. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
