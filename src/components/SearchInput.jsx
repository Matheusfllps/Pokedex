import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import { useState } from "react";

const SearchInput = (inputValue, handleChange) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Valor do input:", inputValue);
  };

  return (
    <Stack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <FormControl onSubmit={handleSubmit}>
          <Input
            value={inputValue}
            type="text"
            placeholder="Escolha um Pokemon"
            sx={{
              "::placeholder": {
                position: "relative",
                left: "20px",
              },
            }}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
      </InputGroup>
    </Stack>
  );
};
export default SearchInput;
