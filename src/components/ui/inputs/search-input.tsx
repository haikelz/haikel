import { SearchIcon } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { tw } from "~lib/helpers";

type SearchInputProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export function SearchInput({ search, setSearch }: SearchInputProps) {
  return (
    <div className="relative my-6 w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon size={20} />
      </div>
      <input
        className={tw(
          "block w-full border-2 border-base-0",
          "focus:border-blue-500 focus:ring-blue-500 focus:ring-1",
          "dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-1",
          "dark:border-base-5 bg-white dark:bg-base-0",
          "rounded-md",
          "px-4 py-1.5 pl-12 font-medium outline-none"
        )}
        type="text"
        name="search"
        placeholder="Search Here...."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
      />
    </div>
  );
}
