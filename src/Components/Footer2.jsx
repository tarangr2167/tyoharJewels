// import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Footer2 = () => {
  const navigate = useNavigate();
  //   const [email, setEmail] = useState("");
  //   const [setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  //   const handleSubscribe = (e) => {
  //     e.preventDefault();
  //     if (email && email.includes("@")) {
  //       // In a real app, you would send this to your API
  //       console.log("Subscribing email:", email);
  //       setSubscribed(true);
  //       setEmail("");

  //       // Reset the subscribed message after 3 seconds
  //       setTimeout(() => {
  //         setSubscribed(false);
  //       }, 3000);
  //     }
  //   };

  return (
    <footer className="bg-white border-t">
      {/* Newsletter Section */}
      {/* <div className="container mx-auto py-8 px-4"> */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-1/3">
            <h2 className="text-[#283878] text-xl md:text-2xl font-bold leading-tight">
              JOIN OUR NEWSLETTER TO KEEP UP TO DATE WITH US!
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#283878]"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#283878] text-white px-6 py-3 rounded-full hover:bg-[#5c0239] transition-colors"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-green-600 mt-2">Thank you for subscribing!</p>
            )}
          </div>
        </div> */}
      {/* </div> */}

      {/* Main Footer */}
      <div className="bg-[#283878] text-white py-12 md:px-[106px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Brand */}
            <div>
              <Link
                to="/"
                className="text-3xl font-bold mb-6"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                TYOHAR
              </Link>

              <p className="mb-4">
                JOIN OUR NEWSLETTER TO KEEP UP TO DATE WITH US!
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-xl font-medium mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="hover:underline"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/about")}
                    className="hover:underline"
                  >
                    ABOUT
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/allproduct")}
                    className="hover:underline"
                  >
                    ALL PRODUCT
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="hover:underline"
                  >
                    CONTACT
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h3 className="text-xl font-medium mb-6">SERVICES</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation("/track-order")}
                    className="hover:underline"
                  >
                    TRACK ORDER
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/return-exchange")}
                    className="hover:underline"
                  >
                    RETURN & EXCHANGE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/shipping-policy")}
                    className="hover:underline"
                  >
                    SHIPPING POLICY
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/privacy-policy")}
                    className="hover:underline"
                  >
                    PRIVECY POLICY
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-xl font-medium mb-6">CONATCT</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WHATSAPP
                  </a>
                </li>
                <li>
                  <a href="mailto:info@tyohar.com" className="hover:underline">
                    EMAIL
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/tyohar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/tyohar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    FACEBOOK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#12113d] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Tyohar All rights reserved</p>
            <p className="mt-2 md:mt-0">Develop by Tarang</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
