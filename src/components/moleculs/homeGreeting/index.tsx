import { lazy } from "react";

const HomeDesc = lazy(
  () => import("@/src/components/atoms/home/homeTextGreeting/homeDesc")
);

const HomeName = lazy(
  () => import("@/src/components/atoms/home/homeTextGreeting/homeName")
);

const HomeGreeting = () => {
  return (
    <section className="body-font tracking-wide">
      <div className="container mx-auto flex pt-10 md:py-24 max-w-7xl px-4 sm:px-6 items-center justify-center flex-col h-screen">
        <HomeName />
        <HomeDesc />
      </div>
    </section>
  );
};

export default HomeGreeting;
