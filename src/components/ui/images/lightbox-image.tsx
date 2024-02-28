"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { match } from "ts-pattern";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { tw } from "~lib/helpers";

type LightboxImageProps = ImageProps & {
  src: string;
  alt: string;
  className?: string;
};

export default function LightboxImage(
  { src, alt, className, ...props }: LightboxImageProps
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        className={tw(
          "aspect-auto cursor-pointer rounded-sm object-cover",
          className
        )}
        onClick={() => setIsOpen(true)}
        decoding="async"
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        loading="lazy"
        data-cy="lightbox-image"
        title={alt}
        {...props}
      />
      {match({ isOpen: isOpen })
        .with({ isOpen: true }, () => (
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
                    fetchPriority="high"
                    draggable={false}
                    width={1000}
                    height={1000}
                  />
                );
              },
            }}
          />
        ))
        .otherwise(() => null)}
    </>
  );
}
