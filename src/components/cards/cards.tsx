import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Projects from "./projects";

const Cards = () => {
  const card = useColorModeValue("#e2e8f0", "#1f1d2e");
  const stack = useColorModeValue("#247881", "#d1d9d0");
  const color = useColorModeValue("white", "black");

  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Projects
        card={card}
        stack={stack}
        color={color}
        setLoading={setLoading}
        isLoading={isLoading}
      />
    </>
  );
};

export default Cards;
