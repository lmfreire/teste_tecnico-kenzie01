import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: left;

  .spandError {
    color: #b22222;
  }

  div {
    color: #656565;
  }
`;

export const StyledInput = styled.div`
  background-color: #ffffff;
  color: gray;
  padding: 0.8rem;
  border: 1px solid #dde6e9;
  border-radius: 4px;
  width: 80%;
  display: flex;
  transition: 1.5s;

  input {
    background: transparent;
    align-items: center;
    font-size: 1.2rem;
    flex: 1;
    border: 0;
    color: #000000;
    width: 100%;
    outline: none;
  }

  :hover {
    border-color: #66afe9;
    transition: 1.5s;
  }
`;
