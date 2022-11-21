import { IdYoutube } from "@/types";

const Youtube = ({ id }: IdYoutube) => {
  return (
    <div className="relative pb-[56.25%] my-4 h-0 overflow-hidden max-w-full">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted media"
        title="Youtube Video"
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

export default Youtube;
