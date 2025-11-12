"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  //Reset de estilos básicos
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Estilos globais do body
  body {
    background-color: #0B0B0B;
    color: #ffffff;
  }
`;
