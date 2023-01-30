import axios from "axios";
import React from "react";
import styled from "styled-components";

export default function Produto(props) {
  const { REACT_APP_API_URL } = process.env;
  const { nome, imagem, valor, produtoID } = props.produto;
  function handleAddCarrinho() {
    const config = {
      // headers: {
      //   Authorization: `Bearer ${userData.token}`,
      // },
    };
    const item = { produtoID: produtoID, quantidade: 1 };
    axios.post(`${REACT_APP_API_URL}/home`, item);
  }
  return (
    <ProdutoContainer>
      <p>{nome}</p>
      <div>
        <img src={imagem} />
      </div>
      <p>{valor}</p>
      <button onClick={() => handleAddCarrinho} />
    </ProdutoContainer>
  );
}

const ProdutoContainer = styled.div`
  aspect-ratio: 1/1.4;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p {
    font-size: 18px;
    font-weight: 700;
  }
  div {
    height: 100px;
    width: auto;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  button {
    border: none;
    background-color: #d3d3d3;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    height: 20px;
    width: 60%;
  }
`;
