import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { cxm } from "~lib/helpers/cxm";

interface LightboxImageProps {
  src: string;
  alt: string;
}

export default function LightboxImage({ src, alt }: LightboxImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        className={cxm(
          "cursor-pointer object-cover duration-700",
          isLoading ? "blur-md" : "blur-none"
        )}
        onClick={() => setIsOpen(true)}
        onLoadingComplete={() => setIsLoading(false)}
        decoding="async"
        src={src}
        alt={alt}
        width={500}
        height={500}
        loading="lazy"
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
