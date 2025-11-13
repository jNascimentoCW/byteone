"use client";

import Header from "./Header";
import Server from "./Server";

import { GlobalStyle } from "./styles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Server />
    </>
  );
}
