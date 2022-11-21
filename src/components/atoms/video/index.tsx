import { VideoProps } from "@/types";

const Video = ({ title, link }: VideoProps) => {
  return (
    <div className="relative pb-[56.25%] my-4 h-0 overflow-hidden max-w-full">
      <iframe
        src={link}
        title={title}
        allow="autoplay"
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

export default Video;
