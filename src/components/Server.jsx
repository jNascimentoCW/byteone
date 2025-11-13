import styled from "styled-components";
import Button from "./Button";
import { FaBolt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

// Estilização do container do nome do servidor
export const ServerNameContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap: 0.5rem;
`;

// Estilização das informações de status
export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

// Estilização do ícone de status online
export const OnlineIcon = styled(FaCircle)`
  color: #00ff00;
  box-shadow: 0 0 6px rgba(0, 255, 0, 0.7);
  border-radius: 50%;
`;

// Estilização do ícone de status online
export const OfflineIcon = styled(FaCircle)`
  color: #ff0000;
  box-shadow: 0 0 6px rgba(255, 0, 0, 0.7);
  border-radius: 50%;
`;

// Estilização do span para jogadores conectados
export const Span = styled.span`
  font-weight: 600;
  color: #fb9f24;
`;

export default function ServerName({
  onlinePlayers,
  players,
  btnClickRefresh,
  loading,
}) {
  return (
    <ServerNameContainer>
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
          Jogadores Conectados:
          <Span>
            {" "}
            {loading ? 0 : onlinePlayers.length}/{players.length}
          </Span>
        </p>

        {/* Implementar um random para atualizar os dados só para demonstração */}
        <Button functionality={btnClickRefresh}>
          Atualizar Status <IoReload />
        </Button>
      </StatusInfo>
    </ServerNameContainer>
  );
}
