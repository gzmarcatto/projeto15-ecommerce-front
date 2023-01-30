import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export default function Carrinho() {
  const { user } = useContext(Context);
  const { REACT_APP_API_URL } = process.env;
  const navigate = useNavigate();
  const produtosHardCoded = [
    {
      nome: "aaa",
      imagem: "#",
      valor: 1.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "#",
      valor: 2.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "#",
      valor: 3.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "#",
      valor: 4.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "#",
      valor: 5.0,
      produtoID: 1,
    },
  ];

  return (
    <Container>
      <header>
        <ion-icon
          name="chevron-back-outline"
          onClick={() => navigate(`/home`)}
        ></ion-icon>
        <h2>Meu carrinho</h2>
      </header>
      <ul>
        {produtosHardCoded.map((produto) => (
          <li key={produto.valor}>
            <img src={produto.imagem} alt="produto" />
            <div>
              <h3>{produto.nome}</h3>
              <span>${produto.valor}</span>
            </div>
          </li>
        ))}
      </ul>
      <footer>
        <div>
          <p>Subtotal :</p>
          <span>$15</span>
        </div>
        <button onClick={() => navigate(`/checkout`)}>Checkout</button>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fbfbfd;
  padding: 30px 13px 150px 13px;
  header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    width: 100%;
    padding: 0px 13px;
    row-gap: 30px;
    background: #fbfbfd;
    div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
  }
  }
  ion-icon {
    font-size: 24px;
  }
  h2 {
    margin: auto;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #000000;
  }
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #222030;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 13px;
    padding: 0 7px;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 333px;
    height: 92px;
    background: #ffffff;
    border-radius: 10px;
    div {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
    }
    h3 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.5);
    }
    span {
      font-size: 16px;
      line-height: 23px;
      color: #000000;
    }
    img {
      width: 84px;
      height: 73px;
      border-radius: 15px;
      background: rgba(62, 66, 41, 0.1);
      margin-right: 19px;
    }
  }
  button {
    width: 253px;
    height: 55px;
    background: #f67952;
    border: none;
    border-radius: 155px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
  }
`;
