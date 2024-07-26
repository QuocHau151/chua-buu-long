"use client";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const demthodau = [
  { image: "/assets/images/demthodau/1.jpg" },
  { image: "/assets/images/demthodau/2.png" },
];
const ledangy = [
  { image: "/assets/images/ledangy/1.jpg" },
  { image: "/assets/images/ledangy/2.jpg" },
];
const letamhop = [{}];
const ledebatbaohieu = [{}];
const legiotophatphao = [{}];
export default function Holidays() {
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
  }, [api, current]);

  return (
    <section className=" container pt-20 md:max-w-[70%]" id="holiday">
      <h1 className="text-white text-[30px] text-center px-5 py-5">
        Ngày lễ quan trọng <br /> Chùa Bửu Long
      </h1>
      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[18px]">
              Đêm thọ đầu đà kỷ niệm ngày Thánh Hội
            </AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-5 py-3"
              >
                <CarouselContent>
                  {demthodau.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                        {/* <h1 className="absolute top-2 left-2 px-4 py-[5px] text-[11px] rounded-xl bg-[#2a2121]">
                          Địa điểm
                        </h1> */}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="">
                  {Array.from({ length: count }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-[calc(100%/2)]`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[18px]">
              Lễ Dâng Y Kathina
            </AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {ledangy.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                <div className="w-full">
                  {Array.from({ length: count }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-1/2`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[18px]">
              Lễ Tam Hợp{" "}
            </AccordionTrigger>
            <AccordionContent>
              {/* <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {letamhop.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                <div className="">
                  {Array.from({ length: count }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-[calc(100%/6)]`}
                    />
                  ))}
                </div>
              </Carousel> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[18px]">
              Lễ Để Bát Báo Hiếu
            </AccordionTrigger>
            <AccordionContent>
              {/* <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {ledebatbaohieu.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                <div className="">
                  {Array.from({ length: count }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-[calc(100%/2)]`}
                    />
                  ))}
                </div>
              </Carousel> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-start text-[18px]">
              Lễ Giỗ Tổ Phật Giáo Nguyên Thủy Việt Nam
            </AccordionTrigger>
            <AccordionContent>
              {/* <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {legiotophatphao.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                <div className="">
                  {Array.from({ length: count }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-[calc(100%/2)]`}
                    />
                  ))}
                </div>
              </Carousel> */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
