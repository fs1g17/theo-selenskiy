import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const images = [
  "/mercante/mercante-screenshot-1.png",
  "/mercante/mercante-screenshot-2.png",
  "/mercante/mercante-screenshot-3.png",
];

export default function MercanteCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              src={src}
              width={1000}
              height={100}
              objectFit="contain"
              alt=""
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
