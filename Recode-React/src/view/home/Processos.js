import React, { Component } from 'react';

import styled from 'styled-components';

export default function Processos() {
  return(
    <Processos>
      <div>
        <h1>Processos</h1>
      </div>
    </Processos>
  );
}

const Processos = styled.article`
  background-color: indigo;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 3px 3px 5px black;
    background-color: red
  }`;