import styled from "styled-components";
import Button from "./Button";
import { FaBolt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

export const ServerNameContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap: 0.5rem;
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

export const OnlineIcon = styled(FaCircle)`
  color: #00ff00;
  box-shadow: 0 0 6px rgba(0, 255, 0, 0.7);
  border-radius: 50%;
`;

export const Span = styled.span`
  font-weight: 600;
  color: #fb9f24;
`;

export default function ServerName() {
  return (
    <ServerNameContainer>
      <p>Nome do Servidor</p>
      <h2>Los Santos RP - FiveM</h2>
      <StatusInfo>
        <p>
          <FaBolt color="#FFD700" />
          Status{" "}
          <span>
            <OnlineIcon /> Online
          </span>
        </p>
        <p>
          Jogadores Conectados:<Span> 125/250</Span>
        </p>
        <Button>
          Atualizar Status <IoReload />
        </Button>
      </StatusInfo>
    </ServerNameContainer>
  );
}
