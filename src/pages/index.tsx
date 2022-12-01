import { NextSeo } from "next-seo";
import { useKeydown } from "@/hooks/useKeydown";
import { isShowedAtom } from "@/store";
import { useAtom } from "jotai";
import Modal from "@/components/molecules/modal";

const Home = () => {
  const [isShowed, setIsShowed] = useAtom(isShowedAtom);
  useKeydown({ isCtrlKey: true, previousUrl: "/notes", nextUrl: "/about" });

  return (
    <>
      <NextSeo title="Haikel" />
      <section className="container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pt-10 tracking-wide sm:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-1 text-3xl font-bold">
            Hello, I&#39;m Haikel{" "}
            <span className="cursor-pointer" onClick={() => setIsShowed(!isShowed)}>
              🌸
            </span>
          </h1>
          <p className="mb-4 leading-relaxed">Someone Who Code</p>
        </div>
        <Modal isShowed={isShowed} setIsShowed={setIsShowed} />
      </section>
    </>
  );
};

export default Home;
