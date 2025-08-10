import { MapPin, Mail, Clock, Send } from "lucide-react";
import contactUs from "../../assets/images/blog1.jpg";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

export default function ContactUs() {
  return (
    <>
      <div className=" bg-gray-50 dark:bg-gray-900  dark:bg-gray-900py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Office Address */}
            <div className="bg-white  dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border-b-4 border-mainColor">
              <div className="w-16 h-16 bg-mainColor rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900  dark:text-gray-100 mb-2">University Address</h3>
              <p className="text-gray-600 dark:text-gray-300">70 km Cairo-Alexandria Agricultural Road</p>
            </div>

            {/* Email Us */}
            <div className="bg-white  dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border-b-4 border-mainColor">
              <div className="w-16 h-16 bg-mainColor rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900  dark:text-gray-100 mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">support@mnu.edu.eg</p>
            </div>

            {/* Open Time */}
            <div className="bg-white  dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border-b-4 border-mainColor">
              <div className="w-16 h-16 bg-mainColor rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900  dark:text-gray-100 mb-2">Open Time</h3>
              <p className="text-gray-600 dark:text-gray-300">Mon - Sat (10.00AM - 05.30PM)</p>
            </div>
          </div>

          {/* Get In Touch Section (Image + Form) */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Image */}
            <div className="hidden md:block w-full md:w-1/2">
              <div className="h-full">
                <img
                  src={contactUs}
                  alt="Students walking on stairs"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-white  dark:bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-gray-900  dark:text-gray-100 mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page
                randomised words which don't look even slightly when looking at its layout.
              </p>

              <form className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor transition-all"
                />

                <textarea
                  rows={6}
                  placeholder="Write Your Message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor transition-all resize-none"
                ></textarea>

                  <button
                  type="submit"
                  className="inline-flex items-center gap-2 btn-filled2 mx-auto w-auto"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <GoogleMap />
    </>
  );
}
