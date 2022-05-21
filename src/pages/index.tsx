import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="body-font tracking-wide">
        <div className="container mx-auto flex py-24 max-w-7xl px-4 sm:px-6 items-center justify-center flex-col h-screen">
          <h1 className="title-font text-3xl mb-1 font-bold">
            Hello, I&#39;m Haikel 👋
          </h1>
          <p className="mb-4 leading-relaxed">Penikmat kopi dan pempek</p>
        </div>
      </section>
    </>
  );
};

export default Index;
