import GridCards from "@/src/components/organisms/gridCards";
import WorksTitle from "@/src/components/atoms/works/worksText/worksTitle";
import WorksDesc from "@/src/components/atoms/works/worksText/worksDesc";

const WorksContainer = () => {
  return (
    <div className="container py-10 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
      <div className="flex flex-wrap w-full mb-10">
        <WorksTitle />
        <WorksDesc />
      </div>
      <div className="flex flex-wrap -m-4">
        <GridCards />
      </div>
    </div>
  );
};

export default WorksContainer;
