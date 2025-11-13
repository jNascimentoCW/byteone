import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #1b1b1b;
  color: #fff;
  padding: 3rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: #fb9f24;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #ffab42;
    }
  }

  button.cancel {
    background-color: #333;
    &:hover {
      background-color: #444;
    }
  }
`;

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <Overlay>
      <ModalContainer>
        <h3>Tem certeza que deseja sair?</h3>
        <ButtonsContainer>
          <button className="cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button onClick={onConfirm}>Sair</button>
        </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
}
