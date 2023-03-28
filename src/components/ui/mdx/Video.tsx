import { memo } from "react";

interface VideoProps {
  title: string;
  src: string;
}

const Video = ({ title, src }: VideoProps) => {
  return (
    <div className="relative my-4 h-0 max-w-full overflow-hidden rounded-sm pb-[56.25%]">
      <iframe
        src={src}
        title={title}
        allow="autoplay"
        className="absolute top-0 left-0 aspect-video h-full w-full border-0"
      />
    </div>
  );
};

export default memo(Video);
