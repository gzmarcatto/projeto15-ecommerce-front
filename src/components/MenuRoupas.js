import styled from "styled-components";
import { Navigate } from "react-router-dom";

export default function MenuRoupas(props) {
  const tipos = ["Vestidos", "Camisas", "Calças", "Sapatos", "Acessórios"];
  return (
    <Container>
      {tipos.map((tipo) => {
        return (
          <button onClick={() => props.setTituloProduto(tipo)}>
            <span>{tipo}</span>
          </button>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #d3d3d3;
  width: 100%;
  max-width: 650px;
  min-height: 90px;
  display: flex;
  padding: 0 clamp(12px, 5%, 35px) 15px clamp(12px, 5%, 35px);
  justify-content: space-between;
  column-gap: 5px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #c1c1c1;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #d3d3d3;
  }

  > button {
    width: 20%;
    min-width: 60px;
    max-width: 100px;
    aspect-ratio: 1/1;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    background-color: #ffffff;
    color: #3d3d3d;
    padding: 0;
    display: grid;
    grid-template:
      "a" 3fr
      "b" 1fr / 100%;
    flex-direction: column;
    justify-content: center;
    > span {
      grid-area: b;
    }
  }
`;
