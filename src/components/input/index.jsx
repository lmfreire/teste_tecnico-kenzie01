import { StyledContainer, StyledInput } from "./styled";

function Input({ label, register, name, error, ...rest }) {
  return (
    <StyledContainer>
      <div>
        <div>{label}</div>

        <StyledInput>
          <input {...register(name)} {...rest}></input>
        </StyledInput>
        <div>{!!error && <span className="spandError">{error}</span>}</div>
      </div>
    </StyledContainer>
  );
}

export default Input;
