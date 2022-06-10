// Really, i confuse to give name of every components
import { components } from "@/src/types";
import dynamic from "next/dynamic";

const Stack1 = dynamic(
  () => import("@/src/components/atoms/works/stack/stack1")
);

const Stack2 = dynamic(
  () => import("@/src/components/atoms/works/stack/stack2")
);

const TechStack = ({ stack1, stack2 }: components) => {
  return (
    <div className="flex mt-3">
      <Stack1 stack1={stack1} />
      <Stack2 stack2={stack2} />
    </div>
  );
};

export default TechStack;
