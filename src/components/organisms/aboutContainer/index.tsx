import { useState } from "react";
import AboutTitle from "@/src/components/atoms/about/aboutText/title";
import AboutImage from "@/src/components/atoms/about/aboutImage";
import AboutDesc from "@/src/components/atoms/about/aboutText/desc";

const AboutContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const loadingProsess = () => setLoading(false);
  return (
    <div className="container pt-10 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
      <div className="flex justify-center items-center flex-wrap w-full mb-10">
        <div className="mb-1 lg:mb-0 flex justify-center items-center flex-col">
          <AboutTitle />
        </div>
        <div className="mt-2 sm:mt-4 flex flex-col justify-center items-center">
          <AboutImage isLoading={isLoading} loadingProsess={loadingProsess} />
          <AboutDesc />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
