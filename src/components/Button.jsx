import styled from "styled-components";

// Estilização do botão
export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #0f0f10;
  border-radius: 8px;
  border: 2px solid #fb9f24;
  padding: 0.5rem 0.7rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ffab42;
    color: #0b0b0b;
  }
`;

export default function Button({ children, functionality }) {
  return <ButtonStyled onClick={functionality}>{children}</ButtonStyled>;
}
