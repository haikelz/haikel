import { Components } from "@/src/interfaces";
import Stack1 from "@/src/components/atoms/works/stack/stack1";
import Stack2 from "@/src/components/atoms/works/stack/stack2";

const TechStack = ({ stack1, stack2 }: Components) => {
  return (
    <div className="flex mt-3">
      <Stack1 stack1={stack1} />
      <Stack2 stack2={stack2} />
    </div>
  );
};

export default TechStack;
