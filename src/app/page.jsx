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

export const Loading = styled.p`
  text-align: center;
  color: #ffffff;
  padding: 2rem;
  font-size: 1.2rem;
`;

export default function Home() {
  // Estado para armazenar os dados dos jogadores
  const [players, setPlayers] = useState([]);
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Está implementado com useEffect para simular uma chamada de API e carregar os dados dos jogadores ao montar o componente para usar, por exemplo, axios para chamar uma API real futuramente
  useEffect(() => {
    setPlayers(playersData);
  }, []);

  // Filtra os jogadores online sempre que a lista de jogadores mudar
  useEffect(() => {
    const filteredPlayers = players.filter((players) => players.online);
    setOnlinePlayers(filteredPlayers);
  }, [players]);

  // Função para atualizar os dados dos jogadores (simulação)
  function btnClickRefresh() {
    setLoading(true);

    // Simula uma chamada de API com um timeout
    setTimeout(() => {
      const updatedPlayers = players.map((player) => ({
        ...player,
        online: Math.random() > 0.5, // Simula o status online/offline aleatoriamente
      }));

      // Atualiza os estados com os novos dados
      setPlayers(updatedPlayers);

      setLoading(false);
    }, 1500);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Panel>
        <Server
          onlinePlayers={onlinePlayers}
          players={players}
          loading={loading}
          btnClickRefresh={btnClickRefresh}
        />
        {loading ? (
          <Loading>Carregando dados...</Loading>
        ) : (
          <Table onlinePlayers={onlinePlayers} />
        )}
      </Panel>
    </>
  );
}
