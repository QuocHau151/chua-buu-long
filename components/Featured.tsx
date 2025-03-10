"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const images = [
  { image: "/assets/images/1.jpg", name: "Tượng Phật Niết Bàn" },
  { image: "/assets/images/2.jpg", name: "Thiền Xá" },

  { image: "/assets/images/4.jpg", name: "Bồ Đề Phật Cảnh" },
  {
    image: "/assets/images/5.jpg",
    name: "Cõi Bình Yên",
  },
  { image: "/assets/images/6.jpg", name: "Tháp Ngài Sơ Tổ" },

  { image: "/assets/images/8.jpg", name: "Đền Thờ Ngài Sivali " },
  {
    image: "/assets/images/3.jpg",
    name: "Khác",
  },
];
export default function Featured() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=" pt-20 md:max-w-[70%] md:mx-auto" id="featured">
      <h1 className="text-white text-[30px] text-center px-14 py-5">
        Kiến trúc nổi bật <br /> Chùa Bửu Long
      </h1>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full space-y-5 "
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-[75%] h-[400px] md:h-[500px] "
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <h1 className="absolute top-2  z-10 left-[5%] px-4 py-[5px] text-[11px] rounded-xl bg-[#2a2121]">
                  {item.name}
                </h1>
                <Image
                  src={item.image}
                  className=" object-cover object-center"
                  fill
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex items-center justify-center">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`${
                current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
              } inline-block h-1 w-[11.1%]`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
