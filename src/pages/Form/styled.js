import styled from "styled-components";

export const Contaier = styled.div`
  display: flex;
`;

export const StyledContainer = styled.div`
  background-color: #ffffff;
  font-size: 0.8rem;

  /* background-color: beige; */
  padding: 1rem;
  width: 320px;

  h1 {
    font-family: "SourceSansPro";
    font-size: 24px;
    line-height: 28px;
    color: #656565;
  }

  .spanMax {
    margin-top: -1rem;
    color: #cecece;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    width: 30%;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    color: #656565;
  }
`;
