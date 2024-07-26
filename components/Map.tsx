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
  { image: "/assets/images/baothap/1.webp" },
  { image: "/assets/images/baothap/2.jpg" },
  {
    image: "/assets/images/baothap/3.jpg",
  },
  { image: "/assets/images/baothap/4.jpg" },
  {
    image: "/assets/images/baothap/5.jpg",
  },
  { image: "/assets/images/baothap/6.jpg" },
];
export default function BaoThap() {
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
    <section className=" pt-20 w-full" id="map">
      <h1 className="text-white text-[30px] text-center px-14 py-5">
        Bảo Tháp <br /> Gotama Cetiya
      </h1>
      <div className="container text-[13px] text-justify mb-10 space-y-3">
        <p>
          Nơi đây gây thương nhớ với một không gian yên bình và thanh tịnh, kiến
          trúc luôn gây hút mắt người nhìn. Điểm nhấn của ngôi chùa là bảo tháp
          Gotama Cetiya xây từ năm 2007, hoàn thành sau 6 năm.
        </p>
        <p>
          Bảo tháp là nơi thờ xá lợi Phật và các Chư Thánh Tăng. Bảo tháp rộng
          trên 2.000 mét vuông, cao 70m, được xây dựng theo nét của văn hóa Phù
          Nam, xung quanh là các tháp nhỏ đều làm bằng đồng, có màu vàng óng.
          Bảo tháp Gotama Cetiya là ngôi tháp chính của chùa Bửu Long và là ngôi
          chùa lớn nhất Việt Nam. Bảo tháp chính này là sự kết hợp tinh tế giữa
          kiến ​​trúc hiện đại. Nơi đây có nền văn minh Suvannabhumi cổ xưa ở
          Đông Nam Á.
        </p>
        <p>
          Bảo tháp được bao quanh bởi 4 tháp phụ: Đản Sinh, Thành Đạo, Pháp Luân
          và Niết Bàn. Bảo tháp này được xây dựng theo phong cách kiến ​​trúc
          chùa Thái Lan. Màu sắc chủ đạo là màu trắng pha chút vàng tươi ở đỉnh
          tháp. Trên đỉnh chóp được trang bị những chiếc chuông gió sắc nét, tạo
          cho người ta cảm giác thành kính. Hai bên chùa có 2 tháp chuông cao 15
          mét. Ngoài ra, xung quanh tháp còn có 32 ngọn đèn cao khoảng 4 mét.
          Thiết kế bên trong bảo tháp cũng là một thiết kế tương ứng, đối lập.
          Chính sự hài hòa đã làm điểm nhấn trong thiết kế của báo tháp đồ độ
          này.
        </p>
      </div>
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
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
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
