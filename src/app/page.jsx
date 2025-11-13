"use client";

import Header from "../components/Header";
import Server from "../components/Server";
import Table from "../components/Table";

import { useEffect, useState } from "react";
import playersData from "../data/players.json";

import styled from "styled-components";

import { GlobalStyle } from "../components/styles";

// Estilização do painel principal
export const Panel = styled.div`
  background-color: #4d4d4d;
  border: 1.5px solid #333;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(111, 111, 111, 0.5);
  width: 90%;
  margin: 2rem 0;
  padding-bottom: 1rem;
`;

export default function Home() {
  // Estado para armazenar os dados dos jogadores
  const [players, setPlayers] = useState([]);

  // Está implementado com useEffect para simular uma chamada de API e carregar os dados dos jogadores ao montar o componente para usar, por exemplo, axios para chamar uma API real futuramente
  useEffect(() => {
    setPlayers(playersData);
  }, []);

  // Filtra apenas os jogadores que estão online
  const onlinePlayers = players.filter((player) => player.online);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Panel>
        <Server />
        <Table onlinePlayers={onlinePlayers} />
      </Panel>
    </>
  );
}
