"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { tw } from "~lib/helpers";

type LightboxImageProps = {
  src: string;
  alt: string;
};

export default function LightboxImage({ src, alt }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        className={tw("aspect-auto cursor-pointer rounded-sm object-cover")}
        onClick={() => setIsOpen(true)}
        decoding="async"
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        loading="lazy"
        data-cy="lightbox-image"
      />
      {isOpen ? (
        <Lightbox
          plugins={[Captions]}
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: src, alt: alt, title: alt }]}
          render={{
            slide: () => {
              return (
                <Image
                  className="aspect-auto rounded-sm"
                  alt={alt}
                  src={src}
                  loading="eager"
                  draggable={false}
                  width={1000}
                  height={1000}
                />
              );
            },
          }}
        />
      ) : null}
    </>
  );
}
