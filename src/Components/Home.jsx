import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import h1 from "../assets/h1.svg";
import h2 from "../assets/h2.svg";
import h3 from "../assets/h3.svg";
import h4 from "../assets/h4.svg";

const Home = () => {
  const navigate = useNavigate();
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleShopAll = () => {
    navigate("/checkout");
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  };

  // Product data with images
  const products = [
    {
      id: 1,
      mainImage: h1,
      alt: "description",
    },
    {
      id: 2,
      mainImage: h2,
      alt: "description",
    },
    {
      id: 3,
      mainImage: h3,
      alt: "description",
    },
    {
      id: 4,
      mainImage: h4,
      alt: "description",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative h-screen">
        {/* Text and button overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light text-center mb-6 px-4">
            Discover the Elegance of Minimalism
          </h2>
          <button
            onClick={handleShopAll}
            className="bg-white text-gray-800 px-8 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            Shop All
          </button>
        </div>
        {/* Product Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          navigation={false}
          pagination={{ clickable: false }}
          onSwiper={setSwiperInstance}
          className="w-full h-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-full h-full flex items-center justify-center">
                {/* Product image */}
                <img
                  src={product.mainImage || "/placeholder.svg"}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
