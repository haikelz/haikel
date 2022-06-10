import Desc from "@/src/components/atoms/home/homeTextGreeting/desc";
import Name from "@/src/components/atoms/home/homeTextGreeting/name";

const HomeGreeting = () => {
  return (
    <section className="body-font tracking-wide">
      <div className="container mx-auto flex pt-10 md:py-24 max-w-7xl px-4 sm:px-6 items-center justify-center flex-col h-screen">
        <Name />
        <Desc />
      </div>
    </section>
  );
};

export default HomeGreeting;
