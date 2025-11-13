"use client";

import Header from "../components/Header";
import Server from "../components/Server";
import Table from "../components/Table";

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
  return (
    <>
      <GlobalStyle />
      <Header />
      <Panel>
        <Server />
        <Table />
      </Panel>
    </>
  );
}
