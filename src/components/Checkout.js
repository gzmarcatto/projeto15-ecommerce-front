import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <ion-icon name="ellipse-outline"></ion-icon>
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>
      <h2>Parabens!</h2>
      <p>Sua compra foi finalizada com sucesso!</p>
      <button onClick={() => navigate(`/home`)}>Voltar a home</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 93.32px 0;
  div {
    position: relative;
    width: 208.74px;
    height: 208.74px;
  }
  ion-icon {
    :first-of-type {
      font-size: 208.74px;
      color: #f67952;
    }
    :last-of-type {
      position: absolute;
      font-size: 80px;
      color: #ffe9e2;
      left: 64.37px;
      top: 64.37px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #000000;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }
  button {
    width: 233px;
    height: 55px;
    margin-top: 30px;
    background: #f67952;
    border: none;
    border-radius: 107px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }
`;
