import { Heading, Paragraph, SearchBar, Underline } from "@/atoms";
import ListWorks from "@/organisms/ListWorks";
import Layout from "@/templates/Layout";
import { projectsList } from "@/utils/data";
import { useMemo, useState } from "react";

const Works = () => {
  const [search, setSearch] = useState<string>("");

  const filteredWorks = useMemo(
    () =>
      projectsList.filter((project) => {
        if (project.h4 === search) return project;
        else if (project.h4.toLowerCase().includes(search.toLowerCase())) return project;
      }),
    [search]
  );

  return (
    <Layout
      title="Works"
      description="List some of my works"
      className="flex min-h-screen flex-col items-center justify-start pt-6 pb-6 md:pb-12 md:pt-24"
    >
      <div className="flex w-full flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Heading as="h2" className="text-center">
            Works
          </Heading>
          <Underline />
        </div>
        <div className="w-full text-center leading-relaxed">
          <Paragraph isCenter>List some of my works</Paragraph>
        </div>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      {filteredWorks.length ? (
        <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2">
          <ListWorks filteredWorks={filteredWorks} />
        </div>
      ) : (
        <Paragraph className="font-semibold">The work that you search is not found!</Paragraph>
      )}
    </Layout>
  );
};

export default Works;
