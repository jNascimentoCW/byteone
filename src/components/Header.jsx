import { useState } from "react";

import Button from "./Button";

import styled from "styled-components";
import { IoLogOut } from "react-icons/io5";
import LogoutModal from "./LogoutModal";

// Uma das maneira de estilizar componentes com styled-components estilizando diretamente cada componente
// É a maneira mais recomendada de usar styled-components!!!

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
  const [showModal, setShowModal] = useState(false);

  // Função para abrir o modal
  const handleLogoutClick = () => {
    setShowModal(true);
  };

  // Função para confirmar logout
  const handleConfirmLogout = () => {
    setShowModal(false);
    // Lógica de logout aqui
    alert("Você saiu com sucesso!");
  };

  // Função para cancelar logout
  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <HeaderContainer>
      <Title>
        Byte<Span>One</Span> Panel
      </Title>

      {/* Implementar um modal */}

      <Button functionality={handleLogoutClick}>
        Logout <IoLogOut size="20" />
      </Button>

      {showModal && (
        <LogoutModal
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
    </HeaderContainer>
  );
}
