import styled from "styled-components";
import Button from "./Button";
import { IoLogOut } from "react-icons/io5";

// Uma das maneira de estilizar componentes com styled-components estilizando diretamente cada componente

// Estilização do cabeçalho
export const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #0f0f10;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin: 0;
`;

// Estilização do título do cabeçalho
export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
`;

// Estilização do destaque "One" no título
export const Span = styled.span`
  color: #fb9f24;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        Byte<Span>One</Span> Panel
      </Title>

      {/* Implementar um modal */}
      <Button onClick={() => alert("Tem certeza que deseja sair?")}>
        Logout <IoLogOut height="3rem" />
      </Button>
    </HeaderContainer>
  );
}
