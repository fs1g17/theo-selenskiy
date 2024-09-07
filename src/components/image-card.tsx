import Image from "next/image";

export default function ImageCard({ src }: { src: string }) {
  return (
    <div className="w-[100px] height-[100px]">
      <Image
        src={src}
        width={100}
        height={100}
        alt=""
        style={{ objectFit: "scale-down" }}
      />
    </div>
  );
}
