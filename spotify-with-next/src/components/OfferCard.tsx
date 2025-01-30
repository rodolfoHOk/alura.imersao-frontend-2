import Image from 'next/image';
import Link from 'next/link';
import { HtmlHTMLAttributes } from 'react';

interface OfferCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl: string;
}

export function OfferCard({ title, imageUrl, className }: OfferCardProps) {
  return (
    <Link href="#">
      <div
        className={`h-[200px] relative overflow-hidden rounded-lg ${className}`}
      >
        <Image
          src={imageUrl}
          alt=""
          width={120}
          height={120}
          className="absolute right-0 bottom-0 w-[107px] h-auto rotate-[25deg] translate-x-[18%] translate-y-[2%]"
        />
        <span className="p-4 absolute text-primary_text text-2xl font-bold">
          {title}
        </span>
      </div>
    </Link>
  );
}
