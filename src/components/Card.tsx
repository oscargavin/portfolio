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
    <div className="min-w-2/3 h-3/4">
      <Link href={link}>
        <div className="flex transform flex-col items-stretch space-y-4 rounded-md border-2 border-gray-50 bg-black/10 py-6 px-6 pt-4 drop-shadow-lg backdrop-blur-lg transition duration-500 ease-in-out hover:scale-110">
          <Image
            src={image}
            alt={title}
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-100 object-contain shadow-md"
          ></Image>
          <h1>{title}</h1>
          <p className="pb-2 font-extralight text-gray-200">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
