import Image from "next/image";
import { memo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

type LightboxImageProps = {
  src: string;
  alt: string;
};

const LightboxImage = ({ src, alt }: LightboxImageProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
        src={src}
        alt={alt}
        width={500}
        height={500}
        loading="lazy"
        loader={imageKitLoader}
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
                  loading="lazy"
                  loader={imageKitLoader}
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
};

export default memo(LightboxImage);
