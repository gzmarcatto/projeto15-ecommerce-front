import React from "react";
import styled from "styled-components";

import Produto from "./Produto";

export default function ListaProdutos(props) {
  return (
    <Container>
      <ContainerHeader>
        <h2>{props.tituloProduto}</h2>
        <a onClick={() => props.setTituloProduto("Últimos lançamentos")}>Ver Todos</a>
      </ContainerHeader>
      <ContainerListaProdutos>
        {props.produtos.map((produto) => {
          return <Produto produto={produto} />;
        })}
      </ContainerListaProdutos>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 650px;
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 18px;
  margin-bottom: 30px;
  > a {
    font-size: 14px;
    color: #3d3d3d;
  }
`;

const ContainerListaProdutos = styled.div`
  width: 100%;
  display: grid;
  gap: 6%;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, clamp(120px, 20%, 180px));
  justify-content: space-evenly;
`;
