import { useState } from "react";
import Projects from "./projects";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Projects setLoading={setLoading} isLoading={isLoading} />
    </>
  );
};

export default Cards;
