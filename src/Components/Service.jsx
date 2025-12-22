import React from "react";
import { Truck, CreditCard, MessageCircle } from "lucide-react";
import sleft from "../assets/sleft.svg";
import sright from "../assets/sright.svg";

const Service = () => {
  return (
    <section className="bg-[#283878] py-12 px-4 relative overflow-hidden">
      {/* Left decorative floral element */}
      <div className="absolute hidden sm:block bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 opacity-80">
        <img
          src={sleft}
          alt="description"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right decorative floral element */}
      <div className="absolute  hidden sm:block top-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-80">
        <img
          src={sright}
          alt="description"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#283878] p-3 rounded-full border border-white/20 mb-4">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">
              FREE SHIPPING
            </h3>
            <p className="text-white/80 text-sm">
              Free shipping available in India.
            </p>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#283878] p-3 rounded-full border border-white/20 mb-4">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">
              SECURE PAYMENT
            </h3>
            <p className="text-white/80 text-sm">100% Secure payment</p>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#283878] p-3 rounded-full border border-white/20 mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">SUPPORT</h3>
            <p className="text-white/80 text-sm">
              You can Contact us with email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
