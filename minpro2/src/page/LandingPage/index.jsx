import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import about from "../../assets/about.jpg";
import theraphyOne from "../../assets/theraphy-1.jpg";
import theraphyTwo from "../../assets/theraphy-2.jpg";
import theraphyThree from "../../assets/theraphy-3.jpg";
import Faq from "../../components/Faq";
import home from "../../assets/home.jpg";

const LandingPage = () => {
  return (
    <div className="font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container flex flex-col items-center px-8 mx-auto text-center md:px-16">
          <img src={home} alt="" className="w-96"/>
          <h2 className="mb-4 text-5xl font-bold leading-tight text-gray-800">
            Your Mental Well-Being Matters
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Professional counseling and therapy services to help you navigate life’s challenges.
          </p>
          <Link
            to=""
            className="px-4 py-2 text-lg text-white transition bg-orange-600 rounded-md shadow-lg hover:bg-orange-700"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-orange-50">
        <div className="px-10 mx-auto lg:px-32 md:px-20">
          <div className="mb-10 text-center">
            <h1 className="mb-5 text-4xl font-bold text-gray-800">Our Services</h1>
            <p className="text-gray-600">
              We offer comprehensive mental health care to promote emotional well-being,
              resilience, and personal growth. Our licensed professionals are here to support you.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {[
              {
                img: theraphyOne,
                title: "Individual Therapy",
                desc: "One-on-one sessions tailored to your needs for personal growth.",
              },
              {
                img: theraphyTwo,
                title: "Family Counseling",
                desc: "Helping families build stronger, healthier relationships.",
              },
              {
                img: theraphyThree,
                title: "Group Therapy",
                desc: "Supportive group settings for shared experiences and growth.",
              },
            ].map((service, index) => (
              <div key={index} className="p-8 transition bg-white shadow rounded-xl hover:shadow-lg">
                <img src={service.img} alt={service.title} className="mb-5 rounded-md" />
                <h2 className="mb-2 text-2xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container flex flex-col items-center px-10 mx-auto space-y-8 md:flex-row lg:px-32 md:px-20">
          <div className="w-full md:w-1/2">
            <img src={about} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h3 className="mb-4 text-4xl font-bold text-gray-800">About Us</h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              At MindCare Clinic, we are dedicated to providing compassionate and professional 
              mental health services to individuals, families, and groups. Let us help you find 
              clarity and balance in your life.
            </p>
            <Link
              to="#contact"
              className="px-4 py-2 text-white transition bg-orange-600 rounded-md shadow-lg hover:bg-orange-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white ">
        <Faq />
      </section>

      {/* Contact & Location Section */}
      <section
        id="contact"
        className="flex flex-col gap-10 px-10 py-20 md:flex-row md:px-20 lg:px-32"
      >
        {/* Contact Us */}
        <div className="p-8 shadow-lg bg-slate-200 rounded-xl md:w-1/2">
          <h3 className="mb-6 text-4xl font-bold text-center text-gray-800">Contact Us</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-1 text-gray-800 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 text-gray-800 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message here"
                className="w-full px-4 py-3 mt-1 text-gray-800 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white transition bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center p-8 text-center md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Our Location</h1>
          <p className="mb-6 text-gray-600">Visit our clinic to get the best service.</p>
          <iframe
            title="Google Map Location"
            className="w-full rounded-lg h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.198107145362!2d106.79726601670218!3d-6.208763695546719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3dbcd3a7421%3A0x32d70fe0ca64f548!2sJl.%20M.H.%20Thamrin%20No.10%2C%20Central%20Jakarta%2C%20Jakarta%20Pusat%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1634235160987!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
