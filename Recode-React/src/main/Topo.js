import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Topo() {
  return(
    <Header>
      <Link exact to='/'>HOME</Link>
      <Link to='/sobre'>SOBRE</Link>
      <Link to='/fotos'>FOTOS</Link>
      <Link to='/contato'>CONTATO</Link>
      <Link to='/cadastro'>CADASTRO</Link>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: red;

  a {
    text-decoration: none;
    color: white;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
  }
`;