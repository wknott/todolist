import React from "react";
import Input from "../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParamters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        value={query || ""}
        placeholder="Filtruj zadania"
        onChange={onInputChange}
      />
    </Wrapper>
  )
}
export default Search;