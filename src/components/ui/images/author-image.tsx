"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { cxm } from "~lib/helpers";

export default function AuthorImage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const src = "https://avatars.githubusercontent.com/u/77146709?v=4";
  const alt = "Haikel's Profile";

  return (
    <>
      <Image
        className={cxm("mr-2 cursor-pointer rounded-full")}
        onClick={() => setIsOpen(true)}
        decoding="async"
        src={src}
        alt={alt}
        width={25}
        height={25}
        loading="lazy"
        draggable={false}
      />
      {isOpen ? (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: src, alt: alt, title: alt }]}
          plugins={[Captions]}
          render={{
            slide: () => {
              return (
                <Image
                  className="aspect-auto rounded-sm"
                  alt={alt}
                  src={src}
                  loading="eager"
                  draggable={false}
                  width={500}
                  height={500}
                />
              );
            },
          }}
        />
      ) : null}
    </>
  );
}
