import Underline from "@/src/components/atoms/underline";

const WorksTitle = () => {
  return (
    <div className="w-full mb-1 lg:mb-0 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold title-font mb-1 text-center">
        My Works
      </h1>
      <Underline />
    </div>
  );
};

export default WorksTitle;
