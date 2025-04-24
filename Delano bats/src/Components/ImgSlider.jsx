import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "https://cdn.buttercms.com/4VGrB7XRAC2fsgoxxjox",
  "https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy",
  "https://cdn.buttercms.com/3n0Anxu6S82Kpvv91iD0",
  "https://cdn.buttercms.com/VxaKfkXHSJaTLKzIpcx3",
  "https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy",
  "https://cdn.buttercms.com/4VGrB7XRAC2fsgoxxjox",
  "https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy",
  "https://cdn.buttercms.com/3n0Anxu6S82Kpvv91iD0",
  "https://cdn.buttercms.com/VxaKfkXHSJaTLKzIpcx3",
  "https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy",
];

const MySlider = ({rounded}) => {

  const imageClass = `w-full object-cover ${rounded ? "rounded-3xl" : "border-none"}`;

  return (
    <div className="my-10 w-full overflow-hidden ">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      loop={true}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            alt={`Slide ${i}`}
            className={imageClass}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default MySlider;
