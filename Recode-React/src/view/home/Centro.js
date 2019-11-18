import React, { Component } from 'react';
import Processos from './Processos';
import styled from 'styled-components';

export default function Centro() {
  return(
    <Centro>
      <Processos />
      <Processos />
      <Processos />
      <Processos />
    </Centro>
  );
}

const Centro = styled.section`
  display: flex;
  justify-content: space-between;
  height: 88.5vh;
  background-color: yellow;
`;