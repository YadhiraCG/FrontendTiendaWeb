import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function PromoSlider() {
  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1000}
        className="relative w-full h-[360px] shadow-lg"
      >
        {/* Slides */}
        <SwiperSlide>
          <img
            src="/promociones/promo1.png"
            alt="Promo 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/promociones/promo1.png"
            alt="Promo 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/promociones/promo1.png"
            alt="Promo 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        {/* Botones personalizados */}
        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl px-3 py-1 rounded-full z-10">
          ‹
        </button>
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl px-3 py-1 rounded-full z-10">
          ›
        </button>
      </Swiper>
    </div>
  );
}
