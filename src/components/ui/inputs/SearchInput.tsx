import { memo, SetStateAction } from "react";
import { MdSearch } from "react-icons/md";
import { twJoin } from "tailwind-merge";

type SearchInputProps = {
  search: string;
  setSearch: (update: SetStateAction<string>) => void;
};

export const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <div className="relative my-6 w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MdSearch className="h-6 w-6" />
      </div>
      <input
        className={twJoin(
          "block w-full border-[2.5px] border-black bg-white outline-none",
          "py-1.5 px-4 pl-12 font-medium transition-all ease-in-out",
          "hover:shadow-light",
          "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
        )}
        type="text"
        name="search"
        placeholder="Search Here...."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

memo(SearchInput);
