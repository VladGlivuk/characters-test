import { ChangeEventHandler } from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  searchValue: string;
  onSearchChange: (searchValue: string) => Promise<void>;
};

function SearchInput({ searchValue, onSearchChange }: Props) {
  const searchChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <Input
      placeholder="Search characters by name"
      value={searchValue}
      onChange={searchChangeHandler}
    />
  );
}

export default SearchInput;
