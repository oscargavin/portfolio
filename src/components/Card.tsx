import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="flex h-full w-full items-stretch">
      <Link href={link}>
        <div className="flex flex-col items-stretch space-y-4 rounded-md border-2 border-gray-50 bg-black/10 py-6 px-6 pt-4 drop-shadow-lg backdrop-blur-lg lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-[1.025]">
          <h1 className="pt-4">{title}</h1>
          <p className="font-extralight text-gray-200">{description}</p>
          <Image
            src={image}
            alt={title}
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-100 object-contain shadow-md"
          ></Image>
        </div>
      </Link>
    </div>
  );
}

export default Card;
