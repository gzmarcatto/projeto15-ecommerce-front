import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";

import MenuRoupas from "./MenuRoupas";
import ListaProdutos from "./ListaProdutos";

export default function Home() {
  const {user} = useContext(Context)
  const [tituloProduto, setTituloProduto] = useState("Últimos lançamentos");
  const { REACT_APP_API_URL } = process.env;
  const produtosHardCoded = [
    {
      nome: "aaa",
      imagem: "aaa.png",
      valor: 1.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "aaa.png",
      valor: 2.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "aaa.png",
      valor: 3.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "aaa.png",
      valor: 4.0,
      produtoID: 1,
    },
    {
      nome: "aaa",
      imagem: "aaa.png",
      valor: 5.0,
      produtoID: 1,
    },
  ];
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    console.log(user)
    const config = {
      // headers: {
      //   Authorization: `Bearer ${userData.token}`,
      // },
    };
    const request = axios.get(`${REACT_APP_API_URL}/products`, config)
    request.then((item) => {
      setProdutos(item.data);
    });
    return () => {};
  }, []);

  return (
    <Container>
      <Titulo>
        <h1>Descubra</h1>
        <h2>o melhor vestuário para você</h2>
      </Titulo>
      <MenuRoupas setTituloProduto={setTituloProduto} />
      <ListaProdutos
        tituloProduto={tituloProduto}
        setTituloProduto={setTituloProduto}
        produtos={produtosHardCoded}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  background-color: #fbfbfd;
  h1 {
    font-size: 22px;
    font-weight: 700;
  }
  h2 {
    font-size: 18px;
    color: #3d3d3d;
  }
`;

const Titulo = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;
