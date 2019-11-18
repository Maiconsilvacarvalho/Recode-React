import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'
import Topo from './Topo';
import Rodape from './Rodape';

export default function App() {
  return(
    <BrowserRouter>
      <Main>
        <Topo />
        <Routes />
        <Rodape />
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
    color: white;
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
    background-color: green;
`;