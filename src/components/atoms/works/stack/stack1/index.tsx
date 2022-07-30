import { Components } from "@/src/props";

const Stack1 = ({ stack1 }: Components) => {
  return (
    <span className="mr-2 px-1.5 text-sm text-white dark:text-slate-900 bg-[#247881] dark:bg-[#d1d9d0]">
      {stack1}
    </span>
  );
};

export default Stack1;
