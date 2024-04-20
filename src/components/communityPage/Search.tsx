import styled from "styled-components";
import { Search as SearchIcon } from "../svg/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [text, setText] = useState("");
  const navigation = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigation(`/community?name=${text}`);
  };
  return (
    <>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            placeholder="친구 검색"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <SearchBox>
            <SearchIcon />
          </SearchBox>
        </SearchForm>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 15%;
  padding: 0 40px;
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  width: 100%;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 15px;
  padding: 14px 40px 14px 14px;
  border: 2px solid #d6e1e2;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const SearchBox = styled.button`
  position: absolute;
  height: 100%;
  right: 20px;
  top: 0;
  transform-origin: center;
  display: flex;
  align-items: center;
`;
