"use client";

import { createGlobalStyle } from "styled-components";

// Outra maneira de estilizar componentes com styled-components estilizando todos os componentes de uma vez só

export const GlobalStyle = createGlobalStyle`
  //Reset de estilos básicos
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Estilização global do body
  body {
    background-color: #0B0B0B;
    color: #ffffff;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    width: 100vw;
  }
`;
